import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { useArtStore } from "../../../store/Art/artStore"
import Divider from '@mui/material/Divider';
import SectionDisplay from "./DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../models/streetArt";
import Button from "@mui/material/Button";
import SingleDisplay from "./DisplayModes/SingleDisplay";
import MultiDisplay from "./DisplayModes/MultiDisplay";

const DisplayLayout = () => {

  /* State */
  const { data, setData, artId } = useArtStore(
    (state) => ({ 
      data : state.data, 
      setData : state.setData,
      artId: state.artId,
    }), shallow
  );

  const selectedArt : IStreetArt = data[artId]; 
  
  useEffect(()=>{
    console.log(selectedArt)
  },[artId]);

  return (
    <div className="text-white pb-40 overflow-x-auto">
      <MultiDisplay/>
      {/*  <SingleDisplay/> */}

    </div>
  )
}

export default DisplayLayout