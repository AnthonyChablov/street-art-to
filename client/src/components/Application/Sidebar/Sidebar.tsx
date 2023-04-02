import {useState} from 'react'
import { shallow } from 'zustand/shallow';
import { Drawer  } from '@mui/material';
import {  useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import useWindowSize from '../../../hooks/useWindowDimensions';
import DisplayLayout from '../Display/DisplayLayout';

const Sidebar = () => {

    const { toggleSideBar, setToggleSideBar, toggleSideDrawer, setToggleSideDrawer } = useDrawerStore(
        (state) => ({ 
            toggleSideBar : state.toggleSideBar, 
            setToggleSideBar : state.setToggleSideBar,
            toggleSideDrawer: state.toggleSideDrawer,
            setToggleSideDrawer: state.setToggleSideDrawer,
        }), shallow
    );

    const windowWidth = useWindowSize().width;
    const drawerWidth = windowWidth <= 1100 ? '41%' : '33.34%';

    function handleDrawerOpen(){
        
    };
    
    function handleSideBarClose(){
        setToggleSideBar(!toggleSideBar)
    };
  
    return (
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
            open={toggleSideBar}
        >
        <div className="px-10 relative ">
            <div className=" pt-5 pb-4 flex justify-between ">
                <IconButton
                    onClick={()=>{
                        handleSideBarClose();
                    }}
                >
                    <CloseIcon htmlColor="white"/>
                </IconButton>
                <Button 
                    onClick={()=>{setToggleSideDrawer(!toggleSideDrawer)}}
                    variant="contained" 
                    size="small"
                    sx={{ backgroundColor: '' }}
                >
                    My Account
                </Button>
            </div>
            <DisplayLayout/>
        </div>
        </Drawer>

    )
}

export default Sidebar