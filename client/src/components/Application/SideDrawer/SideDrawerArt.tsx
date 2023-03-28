import Drawer from '@mui/material/Drawer';
import { shallow } from 'zustand/shallow';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UserDisplayCard from './UserDisplay/UserDisplayCard';
import SingleDisplay from '../Display/DisplayModes/SingleDisplay';

const SideDrawerArt = () => {

    const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
        (state) => ({ 
            toggleArtDrawer : state.toggleArtDrawer, 
            setToggleArtDrawer : state.setToggleArtDrawer
        }), shallow
    );

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
            anchor="right"
            open={toggleArtDrawer}
        >
            <div className="px-10 relative pt-5 pb-4  flex flex-row items-center justify-between ">
                <IconButton onClick={()=>{setToggleArtDrawer(!toggleArtDrawer)}}>
                  <CloseIcon htmlColor='white'/>
                </IconButton>
                
            </div>
            <SingleDisplay/>
        </Drawer>
    </div>
  )
}

export default SideDrawerArt