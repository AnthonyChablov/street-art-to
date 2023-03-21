import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { useArtStore } from "../../../store/Art/artStore"
import Divider from '@mui/material/Divider';
import SectionDisplay from "./DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../models/streetArt";

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
    <div className="text-white pt-9 overflow-auto ">
      <h1 className="text-2xl mb-5">
        {/* selectedArt.properties.title */}
      </h1>
      <Divider className='bg-zinc-700' sx={{ height:'2px'}}/><Divider/>
      <SectionDisplay mode={'Image'}/>
      <SectionDisplay mode={'General'}/>
      <SectionDisplay mode={'Comments'}/>
    </div>
  )
}

export default DisplayLayout