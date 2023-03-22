import { useArtStore } from "../../../../store/Art/artStore";
import { shallow } from "zustand/shallow";
import CardDisplay from "../DisplayElements/CardDisplay";
import { IStreetArt } from "../../../../models/streetArt";

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
      {
        data.map((art : IStreetArt, index : number)=>{
          return (
            <CardDisplay
              key={index} 
              title={art?.properties.title} 
              icon={''} 
              address={art?.properties.address} 
              year={art?.properties.year}
            />
          )
        })
      }
    </div>
  )
}

export default MultiDisplay