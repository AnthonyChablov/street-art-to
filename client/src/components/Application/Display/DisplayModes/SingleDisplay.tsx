import IconButton from "@mui/material/IconButton/IconButton";
import Divider from '@mui/material/Divider';
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import SectionDisplay from "../DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import CloseIcon from '@mui/icons-material/Close';

const SingleDisplay = () => {

    /* State */
    const { data, artId } = useArtStore( );
    const { toggleArtDrawer, setToggleArtDrawer} = useDrawerStore();
    const selectedArt:any = data.find((elem: IStreetArt) => elem.id === artId); 
    
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