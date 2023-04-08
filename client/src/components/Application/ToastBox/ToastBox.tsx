import Snackbar from "@mui/material/Snackbar";
import { shallow } from "zustand/shallow";
import { useDrawerStore } from "../../../store/Drawer/drawerStore";


const ToastBox = () => {

    
    const { toggleToast, setToggleToast } = useDrawerStore(
        (state) => ({ 
            toggleToast : state.toggleToast, 
            setToggleToast : state.setToggleToast
        }), shallow
    );

    function handleClose(){
        setToggleToast(!toggleToast)
    }

    return (
        <Snackbar
            open={toggleToast}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            
        />
    )
}

export default ToastBox