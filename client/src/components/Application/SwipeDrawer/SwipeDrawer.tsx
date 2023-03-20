import React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Menu from '../Menu/Menu';
import DisplayLayout from '../Display/DisplayLayout';
import { useArtStore } from '../../../store/Art/artStore';
import { shallow } from 'zustand/shallow';

/* How much drawer extends outwards */
const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#191919',
}));
  
const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 13,
    left: 'calc(50% - 15px)',
    
}));
  
export default function SwipeDrawer(props: any) {

    /* State */
    const { data, setData, artId } = useArtStore(
        (state) => ({ 
        data : state.data, 
        setData : state.setData,
        artId: state.artId,
        }), shallow
    );

    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

return (
    <div className='top-0 z-50 absolute'>
        <Root>
        <CssBaseline />
        <Global
            styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                    height: `calc(70% - ${drawerBleeding}px)`,
                    overflow: 'visible',
                },
            }}
        />
        <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <StyledBox
                sx={{
                    position: 'absolute',
                    top: -drawerBleeding,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: 'visible',
                    right: 0,
                    left: 0,
                }}
            >
                
                <Puller />
                <Typography sx={{ p: 2, color: 'white' }}>
                    {`${data.length} results`}
                </Typography>
                
            </StyledBox>
            <StyledBox
                sx={{
                    px: 6,
                    pb: 2,
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <DisplayLayout/>
            </StyledBox>
        </SwipeableDrawer>
        </Root>
    </div>
);
}
