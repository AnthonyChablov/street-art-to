import React from 'react';
import { Drawer  } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import NavIcon from './NavIcon/NavIcon';
import MapIcon from '@mui/icons-material/Map';
import useWindowSize from '../../../hooks/useWindowDimensions';


const Navbar = () => {
    const windowDimension = useWindowSize();
    const drawerWidth = '3.5rem';

    return (
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor:'#191919',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Divider />
        <List sx={{overflow:'hidden'}}>
            <div className="flex flex-col justify-between h-[50vh]">
                <NavIcon/>
                <div>
                    <NavIcon/>
                    <NavIcon/>
                    <NavIcon/>
                </div>
            </div>
        </List>
    </Drawer>
    )
}

export default Navbar