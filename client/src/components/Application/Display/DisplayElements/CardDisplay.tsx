import { useState } from "react";
import { shallow } from "zustand/shallow";
import Button  from "@mui/material/Button";
import { useArtStore } from "../../../../store/Art/artStore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  IconButton  from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ICardDisplay{
  id: number,
  title:String,
  icon:string,
  address: String,
  year:number,
}

const CardDisplay = ({id, title, icon,address, year}:ICardDisplay) => {

  const [liked, setLiked] = useState(false);
  const [minimize, setMinimize] = useState(true);
  const {artId, setArtId, displaySingleArt, setDisplaySingleArt } = useArtStore(
    (state) => ({ 
      artId : state.artId, 
      setArtId : state.setArtId,
      displaySingleArt : state.displaySingleArt, 
      setDisplaySingleArt : state.setDisplaySingleArt
    }), shallow
  );

  function onClickDisplayHandeller(){
    setDisplaySingleArt(true);
    setArtId(id);
  }

  function onClickLikeHandeller(){
    setLiked(!liked);
    // todo send request to server to save as liked to counter and remember which user liked it 
  }

  function onClickOpenHandeller(){
    setMinimize(!minimize);
  }

  return (
    <div className=" rounded-md  mb-8 relative overflow-hidden shadow-lg">
        <div className=" pt-2 pb-2 absolute top-0 right-0 z-20 w-full flex 
          text-lg items-start justify-between pl-5 flex-row-reverse font-bold text-zinc-300"
        >
          <div className="pr-3 flex">
            <IconButton onClick={()=>onClickLikeHandeller()}>
              { 
                !liked 
                  ? <FavoriteBorderIcon htmlColor="white"/> 
                  : <FavoriteIcon htmlColor="white"/>
              }
            </IconButton>
            <IconButton onClick={()=>onClickOpenHandeller()}>
              { 
                minimize 
                  ? <KeyboardArrowDownIcon htmlColor="white" fontSize="medium"/> 
                  : <RemoveIcon htmlColor="white" fontSize="medium"/>
              }
            </IconButton>
          </div>
          <div className="hover:cursor-pointer w-full" onClick={ () => onClickOpenHandeller() }>
            <span className={` w-60 flex-initial ${minimize ? 'truncate' : ''} `}>{title}</span>
          </div>
        </div>
        <Button 
            variant='contained' 
            sx={{
              py:1.1, 
              width:'100%', 
              backgroundColor:'#262626',
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
              <div className="h-52 w-full overflow-hidden my-20 absolute left-0 bg-zinc-500 ">
                <img src={icon} alt="grafitti-thumbnail" />
                <div className="absolute top-0 right-0 bottom-0 
                  left-0 z-0 h-full w-full overflow-hidden 
                  bg-gradient-to-r from-slate-800 via-zinc-800 
                  to-zinc-900 opacity-70"
                >  
                </div>
              </div>
            </div>
            <div className={`flex items-center justify-between min-w-full w-96 
              mb-3 text-sm text-zinc-50 font-roboto
              ${!minimize && 'mt-32'}
            `}>
              <p>{year}</p>
              <p>{address}</p>
            </div>
          </div>
        </Button>
    </div>
  )
}

export default CardDisplay