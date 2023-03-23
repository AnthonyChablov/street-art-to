import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import { useArtStore } from "../../../../store/Art/artStore";
import SectionDisplay from "../DisplayElements/SectionDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const selectedArt : IStreetArt = data[artId]; 

    return (
        <div className="pt-5">
            <div className="pt-5 pb-8 text-center">
                <Button variant="contained" onClick={()=>{
                    setDisplaySingleArt(false);
                }}>
                    <span className="flex items-center justify-between"> 
                        <ArrowBackIcon fontSize="small"/> 
                        Back
                    </span>
                </Button>
            </div>
            <h1 className="text-2xl mb-5">
                { selectedArt?.properties.title }
            </h1>
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