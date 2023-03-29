import Drawer from '@mui/material/Drawer';
import { shallow } from 'zustand/shallow';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import IconButton from '@mui/material/IconButton';

import UserDisplayCard from './UserDisplay/UserDisplayCard';
import SingleDisplay from '../Display/DisplayModes/SingleDisplay';


const SideDrawerArt = () => {

    const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
        (state) => ({ 
            toggleArtDrawer : state.toggleArtDrawer, 
            setToggleArtDrawer : state.setToggleArtDrawer
        }), shallow
    );

    function onClickHandeller(){
        setToggleArtDrawer(!toggleArtDrawer);
    }

    const drawerWidth ='33.34%';

    return (
        <div className=''>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor:'#191919',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={toggleArtDrawer}
            >
                <div className="px-10 relative text-neutral-100 pb-20">
                    <SingleDisplay/>
                </div>
                
            </Drawer>
        </div>
  )
}

export default SideDrawerArt