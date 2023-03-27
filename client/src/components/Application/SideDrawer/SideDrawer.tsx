import Drawer from '@mui/material/Drawer';
import { shallow } from 'zustand/shallow';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UserDisplayCard from './UserDisplay/UserDisplayCard';

interface ISideDrawer{
  userName : string,
} 

const SideDrawer = ({userName} : ISideDrawer) => {

  const { toggleSideDrawer, setToggleSideDrawer } = useDrawerStore(
    (state) => ({ 
      toggleSideDrawer : state.toggleSideDrawer, 
      setToggleSideDrawer : state.setToggleSideDrawer
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
            open={toggleSideDrawer}
        >
            <div className="px-10 relative pt-5 pb-4 overflow-y-auto  flex flex-row items-center justify-between ">
                <IconButton onClick={()=>{setToggleSideDrawer(!toggleSideDrawer)}}>
                  <CloseIcon htmlColor='white'/>
                </IconButton>
                <div className="text-white text-2xl">
                  <p>Account Settings</p>
                </div>
            </div>
            <UserDisplayCard userName='123' email='123'/>
        </Drawer>
    </div>
  )
}

export default SideDrawer;