import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { shallow } from 'zustand/shallow';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UserDisplayCard from './UserDisplay/UserDisplayCard';
import { logOutUser } from '../../../api/User/logoutUser';
import { Button } from '@mui/material';
import { auth } from '../../../config/firebase';
import Divider from '@mui/material/Divider';

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

  const navigate = useNavigate();

  async function onClickHandeller(){
    logOutUser();
    navigate('/');
  }

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
          open={toggleSideDrawer}
        >
          <div className="px-10 relative h-screen flex flex-col justify-between ">
            <div className=" ">
              <div className=" pt-5 pb-4 overflow-y-auto flex flex-row-reverse items-center justify-between ">
                <IconButton onClick={()=>{setToggleSideDrawer(!toggleSideDrawer)}}>
                  <CloseIcon htmlColor='white'/>
                </IconButton>
                <div className=" text-zinc-100 text-3xl text-center ">
                  <p>My Account</p>
                </div>
              </div>
              <div className="mb-5">
                <Divider className='bg-zinc-700' 
                  sx={{ height:'2px'}}
                />
              </div>
              <Button 
                fullWidth
                variant='contained' 
                onClick={()=>{
                  onClickHandeller();
                }}
              >
                Log Out
              </Button>
            </div>
            <UserDisplayCard userName={'Anthony'} email={auth.currentUser?.email}/>
          </div>
        </Drawer>
    </div>
  )
}

export default SideDrawer;