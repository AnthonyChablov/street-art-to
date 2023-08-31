import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';

const NavSideDrawer = () => {
    const { toggleNavDrawer, setToggleNavDrawer } = useDrawerStore();
    
    const closeDrawer = () => {
        setToggleNavDrawer(false);
    };

    return (
        <Drawer
            anchor="right"
            open={toggleNavDrawer}
            onClose={closeDrawer}
        >
            <div className="w-64 p-4 bg-white">
                {/* Drawer content */}
                <p>Drawer Content</p>
            </div>
        </Drawer>
    );
};

export default NavSideDrawer;
