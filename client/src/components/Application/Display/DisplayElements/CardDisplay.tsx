import { useState } from "react";
import { shallow } from "zustand/shallow";
import Button  from "@mui/material/Button";
import { useArtStore } from "../../../../store/Art/artStore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ICardDisplay{
  id: number,
  title:String,
  icon:string,
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

  const [liked, setLiked] = useState(false)

  function onClickDisplayHandeller(){
    setDisplaySingleArt(true);
    setArtId(id);
  }

  function onClickLikeHandeller(){
    setLiked(!liked);
    // todo send request to server to save as liked to counter and remember which user liked it 
  }

  return (
    <div className=" rounded-md  mb-10 relative overflow-hidden shadow-lg">
        <div className=" pt-2 pb-2 absolute top-0 right-0 z-20 bg-black w-full flex 
          text-lg items-center justify-between pl-5 flex-row-reverse"
        >
          <Button onClick={()=>onClickLikeHandeller()}>
            { !liked 
                ? <FavoriteBorderIcon htmlColor="white"/> 
                : <FavoriteIcon htmlColor="white"/>
            }
          </Button>
          <p>{title}</p>
        </div>
        <Button 
            variant='contained' 
            sx={{
              py:1.1, 
              width:'100%', 
              backgroundColor:'#3f3f46',
              '&:hover': {

              },
            }}
            onClick={()=>{
              setDisplaySingleArt(true);
              onClickDisplayHandeller();
            }}
        > 
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex items-center justify-between w-full ">
              <div className="h-52 w-full overflow-hidden my-20 absolute left-0 bg-zinc-500">
                <img src={icon} alt="grafitti-thumbnail" />
              </div>
            </div>
            <div className=" flex items-center justify-between min-w-full w-96 mt-32 mb-4 text-sm">
              <p>{year}</p>
              <p>{address}</p>
            </div>
          </div>
        </Button>
    </div>
  )
}

export default CardDisplay