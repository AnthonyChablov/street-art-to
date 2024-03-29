import { shallow } from "zustand/shallow";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useDrawerStore } from "../../../store/Drawer/drawerStore";
import useWindowSize from "../../../hooks/useWindowDimensions";
import DisplayLayout from "../Display/DisplayLayout";
import { useEffect } from "react";

const Sidebar = () => {
  /* State */
  const { toggleSideBar, setToggleSideBar } = useDrawerStore();

  const windowWidth = useWindowSize().width;

  function setDrawerWidth(windowWidth: number) {
    if (windowWidth >= 850 && windowWidth <= 1100) return "41%";
    if (windowWidth <= 850) {
      return "100%";
    }
    return "33.34%";
  }

  useEffect(() => {
    if (windowWidth >= 850) {
      setToggleSideBar(true);
    }
  }, []);

  return (
    <Drawer
      sx={{
        width: setDrawerWidth(windowWidth),
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: setDrawerWidth(windowWidth),
          backgroundColor: "#191919",
        },
      }}
      variant="persistent"
      anchor="left"
      open={toggleSideBar}
    >
      <div className="px-5 relative">
        <div
          className={`pt-5 pb-5 mb-3 flex justify-between ${
            windowWidth <= 850 && "flex-row-reverse"
          }`}
        >
          <IconButton
            onClick={() => {
              setToggleSideBar(!toggleSideBar);
            }}
          >
            <CloseIcon htmlColor="white" />
          </IconButton>
        </div>
        <DisplayLayout />
      </div>
    </Drawer>
  );
};

export default Sidebar;
