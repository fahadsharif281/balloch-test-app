import logo from "../../assets/jpg/sideBarLogo.jpeg";
import dragIcon from "../../assets/png/drag.png";
import classes from "./Sidebar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useRoutes } from "../../utils/hooks/useRoutes";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setRoutes } from "../../redux/reducers/userReducer";
import { updateUserAllCategoriesRoutes } from "../../services/general.services";
import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_BASE_URL;
export const Sidebar = ({
  responsiveView,
  handleToggleMenu = () => {},
}: {
  responsiveView?: boolean;
  handleToggleMenu?: () => void;
}) => {
  const { userRoutes } = useRoutes();
  const { routes } = useSelector((state: RootState) => state.root.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    if (responsiveView) {
      handleToggleMenu();
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result?.destination) return;
    const reorderedRoutes = [...userRoutes];
    const [movedRoute] = reorderedRoutes?.splice(result?.source?.index, 1);
    if (!!movedRoute && result?.destination?.index) {
      reorderedRoutes.splice(result?.destination?.index, 0, movedRoute);
      const reorderdedScreenRoutes = reorderedRoutes?.filter(
        (item: any) => item?._id
      );
      dispatch(setRoutes(reorderdedScreenRoutes));
      updateUserAllCategoriesRoutes(
        JSON.stringify({ categories: [...reorderdedScreenRoutes] })
      ).catch(() => {
        toast.error("Unable to reorder categories");
      });
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.img}>
          <img
            onClick={(e) => {
              e.preventDefault();
              // navigate("/");
            }}
            src={logo}
            width="100%"
            height="100%"
          />
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="routes" type="routes">
            {(provided) => (
              <div
                className={classes.menu_list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {userRoutes?.map((items: any, index: number) => {
                  const src = items?.image?.includes("base64")
                    ? items?.image
                    : `${baseURL}/${items?.image}`;
                  return (
                    <>
                      {items?._id ? (
                        <>
                          <Draggable
                            draggableId={items?._id?.toString()}
                            index={index}
                            key={items?._id?.toString()}
                          >
                            {(provided) => (
                              <NavLink
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                to={`/screen-location/${items?.type}`}
                                className={({ isActive }) =>
                                  isActive
                                    ? classes.active_menu_item
                                    : classes.menu_item
                                }
                                onClick={handleClose}
                              >
                                <div>
                                  <img src={dragIcon} />
                                </div>
                                <div>
                                  <img src={src} />
                                </div>
                                <div>{items?.screen_name}</div>
                              </NavLink>
                            )}
                          </Draggable>
                        </>
                      ) : (
                        <NavLink
                          ref={provided.innerRef}
                          to={items.to}
                          className={({ isActive }) =>
                            isActive
                              ? classes.active_menu_item
                              : classes.menu_item
                          }
                          onClick={handleClose}
                        >
                          <div>
                            <img src={src} />
                          </div>
                          <div>{items?.screen_name}</div>
                        </NavLink>
                      )}
                    </>
                  );
                })}
                {provided?.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};
