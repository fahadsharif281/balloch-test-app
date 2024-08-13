import { SwipeableDrawer } from "@mui/material";
import { Sidebar } from "../sidebar/Sidebar";
import classes from "./Drawer.module.scss";

const Drawer = ({
  handleToggleMenu = () => {},
  openMenu,
  responsiveView,
}: {
  handleToggleMenu: () => void;
  openMenu: boolean;
  responsiveView: boolean;
}): JSX.Element => {
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={openMenu}
        onClose={handleToggleMenu}
        onOpen={handleToggleMenu}
      >
        <div>
          <Sidebar
            responsiveView={responsiveView}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
