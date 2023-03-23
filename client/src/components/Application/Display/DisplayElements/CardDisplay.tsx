import { shallow } from "zustand/shallow";
import { useArtStore } from "../../../../store/Art/artStore";
import Button  from "@mui/material/Button";

interface ICardDisplay{
    id: number,
    title:String,
    icon:String,
    address: String,
    year:number,
}



const CardDisplay = ({id, title, icon,address, year}:ICardDisplay) => {

  const {artId, setArtId, displaySingleArt, setDisplaySingleArt } = useArtStore(
    (state) => ({ 
      artId : state.artId, 
      setArtId : state.setArtId,
      displaySingleArt : state.displaySingleArt, 
      setDisplaySingleArt : state.setDisplaySingleArt
    }), shallow
  );

  function onClickHandeller(){
    setDisplaySingleArt(true);
    setArtId(id)
  }

  return (
    <div>
        <Button 
            variant='contained' 
            sx={{py:1.1, width:'100%', mb:'1.75em'}}
            onClick={()=>{
              setDisplaySingleArt(true);
              onClickHandeller();
            }}
        > 
          <div className="flex flex-col justify-center items-center  m-2 p-2 ">
            <p>{title}</p>
            <p>{year}</p>
            <p>{address}</p>
            {/* <img src={icon} alt="" /> */}
            <p>{icon}</p>
          </div>
        </Button>

    </div>
  )
}

export default CardDisplay