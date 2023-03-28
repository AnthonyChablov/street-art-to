import {Marker, Popup} from 'react-leaflet'; 
import { shallow } from 'zustand/shallow';
import ReactDOMServer from 'react-dom/server';
import PlaceIcon from '@mui/icons-material/Place';
import Leaflet from 'leaflet';
import { useRef } from 'react';
import { useArtStore } from '../../../store/Art/artStore';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import SetViewOnClick from './SetViewOnClick';


interface MapMarker {
    key: number,
    id: number,
    latitude: number,
    longitude: number,
    title:String,
    text: String
}

const MapMarker = ({id, latitude, longitude, title, text} : MapMarker) => {

    /*  State  */
    const setArtId = useArtStore(state => state.setArtId); 
    const setDisplaySingleArt = useArtStore(state => state.setDisplaySingleArt);
    const setMapCenter = useArtStore(state => state.setMapCenter); 

    const { toggleArtDrawer, setToggleArtDrawer } = useDrawerStore(
        (state) => ({ 
            toggleArtDrawer : state.toggleArtDrawer, 
            setToggleArtDrawer : state.setToggleArtDrawer
        }), shallow
    );

    const animateRef = useRef(true); // animate map center onClick of Marker
    const iconHTML = ReactDOMServer.renderToString(<PlaceIcon sx={{ fontSize: 400 }}/>);
    const customMarkerIcon = new Leaflet.DivIcon({html: iconHTML});

    function setArtOnClick(){
        setArtId(id);
        setDisplaySingleArt(true);
        setToggleArtDrawer(!toggleArtDrawer)
    }
    
    return (
        <Marker 
            position={ [latitude, longitude] }
            icon= { customMarkerIcon }
            eventHandlers={{
                click: () => {
                    console.log(`marker ${id} clicked`);
                    setArtOnClick();
                    setMapCenter([latitude, longitude])
                },
            }}
        >
            <Popup>
                <div className="text-center font-semibold text-lg ">
                    <h1>{title}</h1>
                </div>
                <p className="text-center">{text}</p>
            </Popup>
            <SetViewOnClick animateRef={animateRef} />
        </Marker>
        
    )
}

export default MapMarker