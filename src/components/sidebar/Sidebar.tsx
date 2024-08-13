import logo from "../../assets/jpg/sideBarLogo.jpeg";
import classes from "./Sidebar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useRoutes } from "../../utils/hooks/useRoutes";

const baseURL = process.env.REACT_APP_BASE_URL;
export const Sidebar = ({
  responsiveView,
  handleToggleMenu = () => {},
}: {
  responsiveView?: boolean;
  handleToggleMenu?: () => void;
}) => {
  const { userRoutes } = useRoutes();
  const navigate = useNavigate();
  const handleClose = () => {
    if (responsiveView) {
      handleToggleMenu();
    }
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.img}>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            src={logo}
            width="100%"
            height="100%"
          />
        </div>
        <div className={classes.menu_list}>
          {userRoutes?.map((items: any, index: number) => {
            const src = items?.image.includes("base64")
              ? items?.image
              : `${baseURL}/${items?.image}`;
            return (
              <NavLink
                id={`${index}`}
                to={items.to}
                className={({ isActive }) =>
                  isActive ? classes.active_menu_item : classes.menu_item
                }
                onClick={handleClose}
              >
                <div>
                  <img src={src} />
                </div>
                <div>{items?.screen_name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};
