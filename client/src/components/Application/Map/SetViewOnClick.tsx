import { useMapEvent } from "react-leaflet";

interface ISetViewOnClick{
    animateRef : React.MutableRefObject<boolean>
}

function SetViewOnClick({ animateRef }:ISetViewOnClick) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    });
    return null;
}

export default SetViewOnClick