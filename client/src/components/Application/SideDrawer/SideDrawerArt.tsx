import Drawer from "@mui/material/Drawer";
import { useDrawerStore } from "../../../store/Drawer/drawerStore";
import useWindowSize from "../../../hooks/useWindowDimensions";
import SingleDisplay from "../Display/DisplayModes/SingleDisplay";

const SideDrawerArt = () => {
  const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore();
  const windowWidth = useWindowSize().width;

  function setDrawerWidth(windowWidth: number) {
    if (windowWidth >= 850 && windowWidth <= 1100) return "41%";
    if (windowWidth <= 850) {
      return "100%";
    }
    return "33.34%";
  }

  return (
    <div className="">
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
        open={toggleArtDrawer}
      >
        <div className="px-5 relative text-neutral-100 pb-20 ">
          <SingleDisplay />
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawerArt;
