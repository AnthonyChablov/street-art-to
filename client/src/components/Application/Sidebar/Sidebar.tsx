import {useState} from 'react'
import { Drawer  } from '@mui/material';
import {  useTheme } from '@mui/material/styles';
import DisplayLayout from '../Display/DisplayLayout';

const Sidebar = () => {

    const drawerWidth ='33.34%';
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
            anchor="left"
            open={true}
        >
            <div className="px-10 relative ">
                {/* <DrawerHeader sx={{p:0}}>
                    <p className='text-md text-zinc-100'>
                        Display
                    </p>
                </DrawerHeader>  */}
                <DisplayLayout/>
            </div>
        </Drawer>

    )
}

export default Sidebar