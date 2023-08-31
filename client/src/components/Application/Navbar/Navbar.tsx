import { Drawer  } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import NavIcon from './NavIcon/NavIcon';

const Navbar = () => {
    
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