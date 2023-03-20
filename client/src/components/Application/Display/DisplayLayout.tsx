import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { useArtStore } from "../../../store/Art/artStore"
import { IART } from "../../../api/getArt";
import Divider from '@mui/material/Divider';
import SectionDisplay from "./DisplayElements/SectionDisplay";


const DisplayLayout = () => {

  /* State */
  const { data, setData, artId } = useArtStore(
    (state) => ({ 
      data : state.data, 
      setData : state.setData,
      artId: state.artId,
    }), shallow
  );
  

  const selectedArt:IART = data[artId];
  
  useEffect(()=>{
    console.log(data[artId])
  },[artId]);

  return (
    <div className="text-white pt-9 overflow-auto ">
      <h1 className="text-2xl mb-5">
        {selectedArt?.fields.Identifier}
      </h1>
      <Divider className='bg-zinc-700' sx={{ height:'2px'}}/><Divider/>
      <SectionDisplay mode={'Image'}/>
      <SectionDisplay mode={'General'}/>
    </div>
  )
}

export default DisplayLayout