import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';

const NavIcon = () => {
  return (
    <ListItem disablePadding  >
        <ListItemButton sx={{p:0, m:0, pt:2}}>
            <ListItemIcon sx={{display:'flex', justifyContent:'center' }}>
                <HomeIcon sx={{color:'white'}}/>
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
  )
}

export default NavIcon