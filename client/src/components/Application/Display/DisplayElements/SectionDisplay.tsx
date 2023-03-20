import { useState } from "react";
import  IconButton  from "@mui/material/IconButton";
import {motion} from 'framer-motion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SubDisplay from "./SubDisplay";
import { useArtStore } from "../../../../store/Art/artStore";
import { shallow } from "zustand/shallow";
import { IART } from "../../../../api/getArt";

interface ISectionDisplay{
    mode: String
}

const minimizeVariants = {
    close:{
        y:-19,
        opacity:0,
        
    },
    open:{
        y:0,
        opacity:1,
        transition:{
            type: 'tween',
            ease: 'easeInOut',
            duration: .5,
            when: '',
        }
    },
}

const SectionDisplay = ({mode}:ISectionDisplay) => {

    /* State */
    const [minimize, setMinimize] = useState(false);
    const { data, setData, artId } = useArtStore(
        (state) => ({ 
        data : state.data, 
        setData : state.setData,
        artId: state.artId,
        }), shallow
    );
    
    const selectedArt:IART = data[artId];

    return (
        <>
            <section className="mt-10 ">
                {/* Header */}
                <div className={`${ minimize ? 'mb-0' : 'mb-7'} flex justify-between items-center `}>
                    <h2 className="uppercase text-sm font-bold ">{mode}</h2>
                    <IconButton 
                        sx={{color:'white'}}
                        onClick={()=>{
                            setMinimize(!minimize);
                        }}
                    >
                        {minimize ? <AddIcon/> : <RemoveIcon/>}
                    </IconButton>
                </div>
                {/* Content */}
                <motion.div className={`${minimize ? 'collapse h-0' : 'visible h-100'} overflow-hidden`} 
                    variants={minimizeVariants}
                    animate={!minimize?'open':'close'}
                >
                    {mode === 'General' 
                        ?<><SubDisplay 
                            title={'Address'} 
                            detail={selectedArt?.fields.address}
                        />
                        <SubDisplay 
                            title={'Description'} 
                            detail={selectedArt?.fields.description}
                        />
                        <SubDisplay 
                            title={'Year'} 
                            detail={selectedArt?.fields.year}
                        /></> 
                        : 
                        <></>
                    }
                </motion.div>
            </section>
        </>
    )
}

export default SectionDisplay