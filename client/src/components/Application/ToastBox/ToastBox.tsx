import Snackbar from "@mui/material/Snackbar";
import { shallow } from "zustand/shallow";
import { useDrawerStore } from "../../../store/Drawer/drawerStore";
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from '@mui/icons-material/Close';

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

    const action = (
        <>

          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
    );

    return (
        <Snackbar
            open={toggleToast}
            autoHideDuration={3400}
            onClose={handleClose}
            message={toggleToast ? 'Added to Favourites' : 'Removed From Favourites'}
            action={action}
        />
    )
}

export default ToastBox