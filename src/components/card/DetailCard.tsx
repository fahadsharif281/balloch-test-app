import React, { useState } from "react";
import classes from "./DetailCard.module.scss";
import CustomButton from "../common/Button/Button";
import {
  DeleteIcon,
  EditIcon,
  PlusSign,
  ViewIcon,
} from "../../assets/svg/SvgImges";
import caution from "../../assets/png/caution.png";

import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IDetailCard } from "../../models/IDetailCard";
import { useNavigate } from "react-router-dom";
import { Result } from "../../models/ILocationReducer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import { deleteLocationApiCall } from "../../services/general.services";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import Modal from "../common/Modal/Modal";
import { toast } from "react-toastify";

const DetailCard = ({ title, addTo, viewTo, editTo, results }: IDetailCard) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Result>();
  const renderTooltip = (name: string, ...props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "10px" }}>{name}</div>
    </Tooltip>
  );
  const handleIconClick = (data: Result) => {
    dispatch(setSelectedLocation(data));
  };

  const handleDelete = () => {
    if (selectedItem) {
      deleteLocationApiCall(selectedItem?._id)
        .then((res) => {
          if (res?.data?.message) {
            toast.success("Location Deleted Successfully");
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
      setTimeout(() => {
        dispatch(getAllLocationsByType({ type: selectedItem?.type }));
      }, 500);
    }
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.label_contain}>
          <label className={classes.label}>{title}</label>
          <div>
            <CustomButton
              onClick={() => {
                if (addTo) {
                  navigate(addTo);
                }
              }}
              buttonClassName={classes.button_class}
              text={
                <>
                  <div className={classes.add_button}>
                    <div className={classes.img}>
                      <PlusSign />
                    </div>
                    <div>Add</div>
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className={classes.card_container}>
          {results &&
            results?.map((items: Result) => {
              return (
                <Card className={classes.card}>
                  <img src={items?.images[0]?.image_url} />
                  <div className={classes.title_contain}>
                    <Card.Title className={classes.title}>
                      {items?.title}
                    </Card.Title>
                  </div>
                  <div
                    onClick={() => {
                      handleIconClick(items);
                    }}
                    className={classes.card_images}
                  >
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("Delete")}
                    >
                      <div
                        onClick={() => {
                          setShow(true);
                          setSelectedItem(items);
                        }}
                      >
                        <DeleteIcon />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("Edit")}
                    >
                      <div
                        onClick={() => {
                          if (editTo) {
                            navigate(editTo);
                          }
                        }}
                      >
                        <EditIcon />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("View")}
                    >
                      <div
                        onClick={() => {
                          if (viewTo) {
                            navigate(viewTo);
                          }
                        }}
                      >
                        <ViewIcon />
                      </div>
                    </OverlayTrigger>
                  </div>
                </Card>
              );
            })}
        </div>
        {show && (
          <Modal closeButton={false} onHide={() => setShow(false)} show={show}>
            <div className={classes.modal_container}>
              <div className={classes.caution}>
                <img src={caution} />
              </div>
              <div className={classes.warning}>
                Are you sure you want to delete this location?
              </div>
              <div className={classes.btn_container}>
                <CustomButton
                  containerClassName={classes.yes_btn_container}
                  buttonClassName={classes.yes_btn}
                  onClick={handleDelete}
                  text="Yes"
                />
                <CustomButton
                  onClick={() => setShow(false)}
                  containerClassName={classes.yes_btn_container}
                  buttonClassName={classes.no_btn}
                  text="No"
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default DetailCard;
