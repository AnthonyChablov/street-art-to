import { shallow } from 'zustand/shallow';
import { Drawer  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import useWindowSize from '../../../hooks/useWindowDimensions';
import DisplayLayout from '../Display/DisplayLayout';

const Sidebar = () => {

    /* State */
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
        <div className="px-10 relative">
            <div className=" pt-5 pb-5 mb-3 flex justify-between ">
                <IconButton
                    onClick={()=>{
                        setToggleSideBar(!toggleSideBar)
                    }}
                >
                    <CloseIcon htmlColor="white"/>
                </IconButton>
                <Button className='bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr '
                    onClick={()=>{
                        setToggleSideDrawer(!toggleSideDrawer)
                    }}
                    variant="contained" 
                    size="small"
                >
                    <p className='text-md py-1 font-medium font-roboto'>My Account</p>
                </Button>
            </div>
            <DisplayLayout/>
        </div>
        </Drawer>
    )
}

export default Sidebar