import {useState} from 'react'
import { Drawer  } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Display from '../Display/Display';
import useWindowSize from '../../../hooks/useWindowDimensions';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

const Sidebar = () => {

    const drawerWidth ='27%';
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    function handleDrawerOpen(){
        setOpen(true);
    };
    
    function handleDrawerClose(){
        setOpen(false);
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
            anchor="right"
            open={true}
        >
            <div className="px-10 relative">
                <DrawerHeader sx={{p:0}}>
                    <p className='text-xl text-zinc-100'>
                        Display
                    </p>
                    <Display/>
                </DrawerHeader> 
                <Divider className='bg-zinc-700' sx={{ height:'3px'}}/><Divider/>
            </div>
        </Drawer>

    )
}

export default Sidebar