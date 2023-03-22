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
        /* Object.keys(data).map((art:IStreetArt, index)=> {
          console.log(data[art])
       }) */
      }
    </div>
  )
}

export default MultiDisplay