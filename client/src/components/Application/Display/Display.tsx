import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { useArtStore } from "../../../store/Art/artStore"


const Display = () => {

  /* State */
  const { data, setData, artId } = useArtStore(
    (state) => ({ 
      data : state.data, 
      setData : state.setData,
      artId: state.artId,
    }), shallow
  );

  useEffect(()=>{
    console.log(data[artId])
  },[artId]);

  return (
    <div>Display</div>
  )
}

export default Display