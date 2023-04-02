import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { useArtStore } from "../../../store/Art/artStore"
import { IStreetArt } from "../../../models/streetArt";
import MultiDisplay from "./DisplayModes/MultiDisplay";


const DisplayLayout = () => {

  /* State */
  const { data, setData, artId, displaySingleArt, setDisplaySingleArt  } = useArtStore(
    (state) => ({ 
      data : state.data, 
      setData : state.setData,
      artId: state.artId,
      displaySingleArt: state.displaySingleArt,
      setDisplaySingleArt : state.setDisplaySingleArt,
    }), shallow
  );

  return (
    <div className="text-white pb-40">
      {
        <MultiDisplay/>
      }
    </div>
  )
}

export default DisplayLayout