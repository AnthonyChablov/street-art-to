import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react'; // Import ReactNode for typing children
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import CloseButton from '../Buttons/CloseButton';

interface NavSideDrawerProps {
    children: ReactNode; // Properly type children as ReactNode
}

const NavSideDrawer = ({ children }: NavSideDrawerProps) => {
    const { toggleNavDrawer, setToggleNavDrawer } = useDrawerStore();

    const closeDrawer = () => {
        setToggleNavDrawer(false);
    };

    return (
        <Drawer
            anchor="right"
            open={toggleNavDrawer}
            onClose={closeDrawer}
            PaperProps={{ style: { width: '45%' } }} // Set width using PaperProps
        >
            <div className="p-4 bg-gradient-to-br from-zinc-600 to-zinc-800 h-screen">
                <div className="text-right">
                    <CloseButton onClick={closeDrawer} />
                </div>
                {children}
            </div>
        </Drawer>
    );
};

export default NavSideDrawer;
