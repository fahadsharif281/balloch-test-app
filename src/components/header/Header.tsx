import classes from "./Header.module.scss";
import { Button, Form } from "react-bootstrap";
import avatar from "../../assets/png/personAvatar.png";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  CloseMenu,
  EditSvg,
  LogoutSvg,
  OpenMenu,
} from "../../assets/svg/SvgImges";
import { useSelector } from "react-redux";
import Modal from "../common/Modal/Modal";
import useLogout from "../../utils/hooks/useLogout";
import EditPasswordModal from "./EditPasswordModal";

const Header = ({
  handleToggleMenu = () => {},
  openMenu,
}: {
  handleToggleMenu: () => void;
  openMenu: boolean;
}): JSX.Element => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const containerRef: any = useRef(null);
  const { user } = useSelector((state: any) => state.root.user);
  const { logout } = useLogout();
  const handleDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };

  const handleClickOutside = (event: any) => {
    if (
      containerRef.current &&
      !containerRef?.current?.contains(event?.target)
    ) {
      setDropDownMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className={classes.container}>
        <div>
          <Button
            onClick={handleToggleMenu}
            className={`${classes.button} ${classes.menu}`}
          >
            {openMenu ? <CloseMenu /> : <OpenMenu />}
          </Button>
        </div>
        <div className={classes.menu_drop_down} ref={containerRef}>
          <Button
            tabIndex={1}
            onClick={handleDropDownMenu}
            className={classes.button}
          >
            <div>
              <img src={avatar} />
            </div>
            <div>Admin</div>
          </Button>
          {dropDownMenu && (
            <div className={classes.menu_list}>
              <MenuList>
                <MenuItem selected className={classes.menu_item}>
                  <div className={classes.list_item}>
                    <div className={classes.user_avatar}>
                      <img src={avatar} />
                      <div>
                        <div>Admin</div>
                        <div className={classes.email}>{user?.email}</div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <div onClick={handleLogout} className={classes.logout_avatar}>
                  <LogoutSvg width="18px" height="18px" />
                </div>
                <Divider color="black" />
                <MenuItem onClick={handleShow}>
                  {" "}
                  <ListItemIcon>
                    <EditSvg />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.text}> Edit Password</span>
                  </ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  {" "}
                  <ListItemIcon>
                    <LogoutSvg width="1em" height="1em" />
                  </ListItemIcon>
                  <ListItemText className={classes.text}>
                    <span className={classes.text}>Logout</span>
                  </ListItemText>
                </MenuItem>
              </MenuList>
            </div>
          )}
        </div>
      </div>
      {show && (
        <Modal title="Update Password" onHide={handleClose} show={show}>
          {" "}
          <EditPasswordModal
            setDropDownMenu={setDropDownMenu}
            handleClose={handleClose}
          />
        </Modal>
      )}
    </>
  );
};
export default Header;
