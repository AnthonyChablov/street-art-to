import { useEffect } from "react";
import { useArtStore } from "../../../../store/Art/artStore";
import { shallow } from "zustand/shallow";
import CardDisplay from "../DisplayElements/CardDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import Divider from "@mui/material/Divider";
import Menu from "../../Menu/Menu";

const MultiDisplay = () => {

  /* State */
  const { 
    data, 
    setData, 
    artId, 
    artSearchQuery,
    wardSearchQuery, 
    programSearchQuery  
  } = useArtStore(
    (state) => ({ 
      data : state.data, 
      programSearchQuery: state.programSearchQuery,
      artSearchQuery: state.artSearchQuery,
      wardSearchQuery: state.wardSearchQuery,
      setData : state.setData,
      artId: state.artId,
    }), shallow
  );


  return (
   
    <div className=" overflow-x-auto ">
      <Menu/>
      <Divider className='bg-zinc-700' sx={{ height:'2px'}}/><Divider/>
      <div className=" pt-64">
    {/* Filter and mapping out Card Display */}
      {
        data
          .filter((art : IStreetArt) => {
            return (
              art?.properties.title.includes(artSearchQuery) 
                && 
              art?.properties.ward.includes(wardSearchQuery)
                &&
              art?.properties.program.includes(programSearchQuery)
            )
          })
          .map((art : IStreetArt, index : number)=>{
            if (!art) {
              return ''
            } 
            return (
              <CardDisplay
                key={index} 
                id={index}
                title={art?.properties.title} 
                icon={art?.properties.media[0].thumbnails.large.url} 
                address={art?.properties.address} 
                year={art?.properties.year}
              />
            )
        })
      }
      </div>
    </div>
  )
}

export default MultiDisplay