import {useState} from 'react'
import { Drawer , IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    const windowDimensions = useWindowSize();
    const drawerWidth = windowDimensions.width > 1200 ? '34%' : '30%';

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
                </DrawerHeader> 
                <Divider className='bg-zinc-800' sx={{ height:'3px'}}/><Divider/>
                
            </div>
        </Drawer>
    )
}

export default Sidebar