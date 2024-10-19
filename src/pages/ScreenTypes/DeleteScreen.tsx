import React from "react";
import caution from "../../assets/png/caution.png";
import classes from "./DeleteScreen.module.scss";
import CustomButton from "../../components/common/Button/Button";
import {
  deleteScreenTypesApiCall,
  updateScreenTypesScreenNameApiCall,
} from "../../services/general.services";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getScreenTypes } from "../../redux/actions/screenTypes.action";
import { getAllUserRoutes } from "../../redux/actions/routes.action";

const DeleteScreen = ({ selectedUser, onHide }: any) => {
  const dispatch = useDispatch<any>();
  const handleDelete = () => {
    if (selectedUser) {
      const formData = new FormData();
      formData.append("screen_name", selectedUser?.screen_name);
      formData.append("isDeleted", "true");
      updateScreenTypesScreenNameApiCall(selectedUser?._id, formData)
        .then((res) => {
          if (res?.data) {
            dispatch(getScreenTypes());
            dispatch(getAllUserRoutes());
            onHide();
            toast.success(res?.data?.message);
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    }
  };
  return (
    <>
      <div className={classes.modal_container}>
        <div className={classes.caution}>
          <img src={caution} />
        </div>
        <div className={classes.warning}>
          Are you sure you want to delete this screen?
        </div>
        <div className={classes.btn_container}>
          <CustomButton
            containerClassName={classes.yes_btn_container}
            buttonClassName={classes.yes_btn}
            onClick={handleDelete}
            text="Yes"
          />
          <CustomButton
            onClick={onHide}
            containerClassName={classes.yes_btn_container}
            buttonClassName={classes.no_btn}
            text="No"
          />
        </div>
      </div>
    </>
  );
};

export default DeleteScreen;
