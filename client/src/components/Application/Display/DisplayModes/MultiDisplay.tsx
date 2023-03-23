import { useArtStore } from "../../../../store/Art/artStore";
import { shallow } from "zustand/shallow";
import CardDisplay from "../DisplayElements/CardDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import Divider from "@mui/material/Divider";

const MultiDisplay = () => {

  const { data, setData, artId } = useArtStore(
    (state) => ({ 
      data : state.data, 
      setData : state.setData,
      artId: state.artId,
    }), shallow
  );

  return (
    <div>
      <h1 className="text-3xl py-5">Art Display</h1>
      <Divider className='bg-zinc-700' sx={{ height:'2px'}}/><Divider/>
      <div className="pt-7">
      {
        data.map((art : IStreetArt, index : number)=>{
          return (
            <CardDisplay
              key={index} 
              id={index}
              title={art?.properties.title} 
              icon={ ''} 
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