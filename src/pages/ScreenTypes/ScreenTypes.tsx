import React, { useEffect, useState } from "react";
import classes from "./ScreenTypes.module.scss";
import Img from "../../assets/png/Car Parking.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { EditIconOrange, PlusSign } from "../../assets/svg/SvgImges";
import Modal from "../../components/common/Modal/Modal";
import EditScreen from "./EditScreen";
import { useDispatch, useSelector } from "react-redux";
import { getScreenTypes } from "../../redux/actions/screenTypes.action";
import { IScreenTypesAPIResult } from "../../models/IScreenTypesReducer";
import CustomButton from "../../components/common/Button/Button";
import { Input } from "@mui/material";
import { TextArea } from "../../components/common/TextArea/TextArea";
import AddCatogoryScreen from "./AddCatogoryScreen";
const baseURL = process.env.REACT_APP_BASE_URL;
const ScreenTypes = () => {
  const dispatch = useDispatch<any>();
  const { allUsers, isUsersLoading } = useSelector(
    (state: any) => state.root.screenTypes
  );
  const [show, setShow] = useState(false);
  const [showCatogory, setShowCatogoryModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IScreenTypesAPIResult>();
  const renderTooltip = (name: string, ...props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "10px" }}>{name}</div>
    </Tooltip>
  );
  useEffect(() => {
    dispatch(getScreenTypes());
  }, []);
  const handleClose = () => {
    setShow(!show);
  };
  const handleCloseCatogoryModal = () => {
    setShowCatogoryModal(!showCatogory);
  };
  return (
    <>
      {!isUsersLoading && (
        <div className={classes.container}>
          <div className={classes.add_button_container}>
            <CustomButton
              onClick={() => {
                handleCloseCatogoryModal()
              }}
              containerClassName={classes.add_button}
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
          <div className={classes.table}>
            <div className={classes.header}>
              <div>Icon</div>
              <div>Screen Name </div>
              <div>Action</div>
            </div>
            {allUsers &&
              allUsers?.map((item: IScreenTypesAPIResult) => {
                return (
                  <div className={classes.row}>
                    <div className={classes.image}>
                      <img src={`${baseURL}/${item?.image}`} alt="icon" />
                    </div>
                    <div>{item?.screen_name}</div>
                    <div
                      onClick={() => {
                        handleClose();
                        setSelectedUser(item);
                      }}
                      className={classes.editicon}
                    >
                      {" "}
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 100, hide: 100 }}
                        overlay={renderTooltip("Edit")}
                      >
                        <div>
                          <EditIconOrange />
                        </div>
                      </OverlayTrigger>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <Modal
        title="Update Screen"
        closeButton={true}
        onHide={handleClose}
        show={show}
      >
        <EditScreen onHide={handleClose} selectedUser={selectedUser} />
      </Modal>
      <Modal
        title="Add Catogory"
        closeButton={true}
        onHide={handleCloseCatogoryModal}
        show={showCatogory}
      >
        <AddCatogoryScreen onHide={handleCloseCatogoryModal} selectedUser={selectedUser} />

      </Modal>
    </>
  );
};

export default ScreenTypes;
