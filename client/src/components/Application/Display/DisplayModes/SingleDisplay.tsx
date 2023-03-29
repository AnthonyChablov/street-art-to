import { shallow } from "zustand/shallow";
import IconButton from "@mui/material/IconButton/IconButton";
import Divider from '@mui/material/Divider';
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import SectionDisplay from "../DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import CloseIcon from '@mui/icons-material/Close';
import {useEffect} from 'react'

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

    const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
        (state) => ({ 
            toggleArtDrawer : state.toggleArtDrawer, 
            setToggleArtDrawer : state.setToggleArtDrawer
        }), shallow
    );

    const selectedArt = data.find((elem: IStreetArt) => elem.id === artId); 

    useEffect(()=>{
        console.log(selectedArt);
    },[selectedArt]);

    return (
        <div className="pt-5 ">
            <div className="pt-5 pb-8 flex flex-row-reverse items-center justify-between">
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
            <Divider/>
            <SectionDisplay mode={'Image'}/>
            <SectionDisplay mode={'General'}/>
            <SectionDisplay mode={'Comments'}/>
        </div>
    )
}

export default SingleDisplay