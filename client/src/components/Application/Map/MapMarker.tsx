import {Marker, Popup} from 'react-leaflet'; 
import ReactDOMServer from 'react-dom/server';
import PlaceIcon from '@mui/icons-material/Place';
import Leaflet from 'leaflet';
import { useMapEvent } from 'react-leaflet';
import { useRef } from 'react';
import { useArtStore } from '../../../store/Art/artStore';

interface MapMarker {
    key: number,
    id: number,
    latitude: number,
    longitude: number,
    title:String,
    text: String
}

function SetViewOnClick({ animateRef }:any) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    });
    return null;
}

const MapMarker = ({id, latitude, longitude, title, text} : MapMarker) => {
  
    const setArtId = useArtStore(state => state.setArtId); // state
    const setDisplaySingleArt = useArtStore(state => state.setDisplaySingleArt);
    const animateRef = useRef(true); // animate map center onClick of Marker
    const iconHTML = ReactDOMServer.renderToString(<PlaceIcon sx={{ fontSize: 400 }}/>);
    const customMarkerIcon = new Leaflet.DivIcon({html: iconHTML});

    function setArtOnClick(){
        setArtId(id);
        setDisplaySingleArt(true);
    }

    return (
        <Marker 
            position={ [latitude, longitude] }
            icon= { customMarkerIcon }
            eventHandlers={{
                click: () => {
                    console.log(`marker ${id} clicked`);
                    setArtOnClick();
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