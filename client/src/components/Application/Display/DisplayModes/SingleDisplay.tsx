import { shallow } from "zustand/shallow";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import IconButton from "@mui/material/IconButton/IconButton";
import Divider from '@mui/material/Divider';
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import { auth } from "../../../../config/firebase";
import SectionDisplay from "../DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import CloseIcon from '@mui/icons-material/Close';
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
            <SectionDisplay mode={'General'}/>
        </div>
    )
}

export default SingleDisplay