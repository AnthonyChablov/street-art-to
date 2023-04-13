import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import ArticleIcon from '@mui/icons-material/Article';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';

const actions = [
  
 
  { icon: <FaceIcon />, name: 'Account' },
  { icon: <ArticleIcon />, name: 'Select' },
  { icon: <SearchIcon />, name: 'Menu' },
];

const SpeedDialMenu = () => {

  /* State */
  const { toggleArtDrawer, setToggleArtDrawer, toggleSideBar, setToggleSideBar, toggleSideDrawer, setToggleSideDrawer } = useDrawerStore(
    (state) => ({ 
      toggleArtDrawer : state.toggleArtDrawer, 
      setToggleArtDrawer : state.setToggleArtDrawer,
      toggleSideBar : state.toggleSideBar,
      setToggleSideBar: state.setToggleSideBar,
      toggleSideDrawer: state.toggleSideDrawer,
      setToggleSideDrawer: state.setToggleSideDrawer
    }), shallow
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 150, right: 16 ,}}
        icon={
          <SpeedDialIcon 
            icon={ <MenuIcon/> } 
            openIcon={ <CloseIcon/> }
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'rgb(63 63 70)',
            '&:hover': {
              bgcolor: ' rgb(82 82 91)',
            }
          }
        }}
      >
        {actions.map((action, i) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={()=>{
              handleClose();
              
              // associate state of drawers to speed dial buttons
              if(i === 0){  // menu select
                setToggleSideDrawer(!toggleSideDrawer);
              }else if (i ===1){  // single
                setToggleArtDrawer(!toggleArtDrawer);
              }else{  // multiple
                setToggleSideBar(!toggleSideBar)
              }
            }}
            FabProps={{
              sx: {
                bgcolor: 'rgb(241 245 249)',
                '&:hover': {
                  
                }
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
    )
}

export default SpeedDialMenu;