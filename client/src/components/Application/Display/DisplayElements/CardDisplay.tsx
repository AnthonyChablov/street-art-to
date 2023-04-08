// @ts-nocheck

import { useState } from "react";
import { shallow } from "zustand/shallow";
import Button  from "@mui/material/Button";
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  IconButton  from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useProgressiveImg from "../../../../hooks/useProgressiveImg";
import lowResImg from './../../../../assets/images/lowRes/graffitti-img-1-low.png';
import useWindowSize from "../../../../hooks/useWindowDimensions";

interface ICardDisplay{
  id: string,
  title:String,
  icon:string,
  address: String,
  year:number,
}

const CardDisplay = ({id, title, icon,address, year}:ICardDisplay) => {

  const [liked, setLiked] = useState(false);
  const [minimize, setMinimize] = useState(true);

  const windowWidth = useWindowSize().width;

  const {artId, setArtId, displaySingleArt, setDisplaySingleArt } = useArtStore(
    (state) => ({ 
      artId : state.artId, 
      setArtId : state.setArtId,
      displaySingleArt : state.displaySingleArt, 
      setDisplaySingleArt : state.setDisplaySingleArt
    }), shallow
  );

  const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
    (state) => ({ 
        toggleArtDrawer : state.toggleArtDrawer, 
        setToggleArtDrawer : state.setToggleArtDrawer
    }), shallow
  );

  const [src, {blur} ] = useProgressiveImg(lowResImg, icon);

  function onClickDisplayHandeller(){
    setDisplaySingleArt(true);
    setToggleArtDrawer(!toggleArtDrawer);
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
    <div className=" rounded-md mb-5 relative overflow-hidden shadow-lg">
      {/* button header */}
        <div className=" pt-2 pb-2 absolute top-0 right-0 z-10 w-full flex flex-row-reverse
          text-lg items-start justify-between pl-5  font-bold text-zinc-300"
        >
          <div className="pr-3 flex ">
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
          <div className="hover:cursor-pointer w-full inline-block" 
            onClick={ () => onClickOpenHandeller() }
          >
            <span className={`flex-initial block pt-1 text-white w-20
              ${ windowWidth <= 700 ? 'w-18' : 'w-40'  } 
              ${minimize && 'truncate ' }
            `}>
              {title}
            </span>
          </div>
        </div>
        <Button className='bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr'
          variant='contained' 
          sx={{
            py:1.1, 
            width:'100%', 
          }}
          onClick={()=>{
            onClickDisplayHandeller();
          }}
        > 
          <div className="flex flex-col justify-center h-full w-full">
            <div className="flex items-center justify-between w-full ">
              <div className={` text-white absolute z-20 font-bold w-11 hover:underline
                ${windowWidth >= 1100 ? 'right-28 text-sm' : 'right-24 text-xs top-5' } 
                ${!minimize ? 'top-4' : 'top-4' } 
              `}
              >
                View
              </div>
              <div className="h-52 w-full overflow-hidden my-20 absolute left-0 bg-zinc-500 ">
                <img className={`${blur ? 'blur-lg' : 'blur-none'}`}
                  src={`${src} `} 
                  alt="grafitti-thumbnail" 
                  style={{
                    transition: blur ? "none" : "filter .5s ease-out"
                  }}
                />
                <div className="absolute top-0 right-0 bottom-0 
                  left-0 z-0 h-full w-full overflow-hidden 
                  bg-gradient-to-r from-slate-800 via-zinc-800 
                  to-zinc-900 opacity-80 brightness-60"
                >  
                </div>
              </div>
            </div>
            <div className={`flex  justify-between 
              mb-3 text-sm text-zinc-50 font-roboto
              ${!minimize && 'mt-32'}
              ${windowWidth <= 1000 ? 'flex-col ' : 'flex-row items-center'}
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