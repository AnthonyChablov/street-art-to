import { shallow } from "zustand/shallow";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import IconButton from "@mui/material/IconButton/IconButton";
import Button from "@mui/material/Button/Button";
import Divider from '@mui/material/Divider';
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import { auth } from "../../../../config/firebase";
import SectionDisplay from "../DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import {useEffect} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonGroup from '@mui/material/ButtonGroup';
import { addLike } from "../../../../api/Likes/addLike";

const SingleDisplay = () => {

    /* State */
    const { data, setData, artId, setDisplaySingleArt } = useArtStore(
        (state) => ({ 
        data : state.data, 
        setData : state.setData,
        artId: state.artId,
        setDisplaySingleArt: state.setDisplaySingleArt
        }), shallow
    );
   
    const { toggleArtDrawer, setToggleArtDrawer, toggleToast, setToggleToast } = useDrawerStore(
        (state) => ({ 
            toggleArtDrawer : state.toggleArtDrawer, 
            setToggleArtDrawer : state.setToggleArtDrawer,
            toggleToast: state.toggleToast,
            setToggleToast: state.setToggleToast
        }), shallow
    );
    const [liked, setLiked] = useState(false);
    const [likeCount , setLikeCount]  = useState(0);

    const selectedArt:any = data.find((elem: IStreetArt) => elem.id === artId); 
    
    /* Logged in User Info From Firebase */
    const [user] = useAuthState(auth);

    function onClickLikeHandeller(){
        setLiked(!liked);
        // todo send request to server to save as liked to counter and remember which user liked it 
        setToggleToast(!toggleToast);
        addLike(user?.uid, artId);
    }

    useEffect(()=>{
        console.log(selectedArt);
    },[selectedArt]);

    return (
        <div className="pt-5 ">
            <div className="pt-5 pb-8 flex flex-row-reverse items-center justify-between ">
                <IconButton 
                    onClick={()=>{
                        setToggleArtDrawer(!toggleArtDrawer);
                    }}
                >
                    <CloseIcon htmlColor='white'/>
                </IconButton>
                <h1 className="text-3xl ">
                    { selectedArt?.properties.title }
                </h1>
            </div>
            <Divider className='bg-zinc-700' 
                sx={{ height:'2px'}}
            />
            <div className="text-center">
                {/* Multi Button */}
                <ButtonGroup
                    className="my-10 "
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                    <Button
                        className="bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr"
                        onClick={()=>{
                            onClickLikeHandeller()
                        }}
                    >
                        { 
                            !liked 
                                ? <FavoriteBorderIcon htmlColor="white"/> 
                                : <FavoriteIcon htmlColor="white"/>
                        }
                        <span className="ml-3  normal-case">
                            {
                                `${
                                    !liked /* Optimistically update UI when user likes art */
                                        ? selectedArt?.socials.likes.length
                                        : selectedArt?.socials.likes.length+1
                                } Likes`
                            }
                        </span>
                    </Button>
                    <Button className="bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr">
                        <CommentIcon/>
                        <span className="ml-3 normal-case">
                        {
                            `Comments`
                        }</span>
                    </Button>
                </ButtonGroup>
            </div>
            <SectionDisplay mode={'Image'}/>
            <SectionDisplay mode={'General'}/>
            <SectionDisplay mode={'Comments'}/>
        </div>
    )
}

export default SingleDisplay