import { Marker, Popup } from "react-leaflet";
import { shallow } from "zustand/shallow";
import { useRef } from "react";
import { useArtStore } from "../../../store/Art/artStore";
import { useDrawerStore } from "../../../store/Drawer/drawerStore";
import SetViewOnClick from "./SetViewOnClick";

interface MapMarker {
  key: number;
  id: string | number;
  latitude: number;
  longitude: number;
  title: String;
  text: String;
}

const MapMarker = ({ id, latitude, longitude, title, text }: MapMarker) => {
  /*  State  */
  const setArtId = useArtStore((state) => state.setArtId);
  const setDisplaySingleArt = useArtStore((state) => state.setDisplaySingleArt);
  const setMapCenter = useArtStore((state) => state.setMapCenter);

  const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
    (state) => ({
      toggleSideBar: state.toggleSideBar,
      setToggleSideBar: state.setToggleSideBar,
      toggleArtDrawer: state.toggleArtDrawer,
      setToggleArtDrawer: state.setToggleArtDrawer,
    }),
    shallow
  );

  const animateRef = useRef(true); // animate map center onClick of Marker

  function onClickHandeller() {
    setMapCenter([latitude, longitude]);
    setArtId(id);
    console.log(`marker ${id} clicked`);

    if (toggleArtDrawer) {
      setDisplaySingleArt(true);
    } else {
      setToggleArtDrawer(!toggleArtDrawer);
    }
  }

  return (
    <Marker
      position={[latitude, longitude]}
      eventHandlers={{
        click: () => {
          onClickHandeller();
        },
      }}
    >
      <Popup>
        <div className="text-center font-semibold text-lg ">
          <h1>{title}</h1>
        </div>
        <p className="text-center">{text}</p>
      </Popup>
      <SetViewOnClick animateRef={animateRef} />
    </Marker>
  );
};

export default MapMarker;
