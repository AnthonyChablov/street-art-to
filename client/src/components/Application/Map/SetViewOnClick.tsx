import { useMap } from "react-leaflet";

interface ISetViewOnClick{
    coordinates : any
}

const SetViewOnClick = ({ coordinates }:ISetViewOnClick) => {
    const map = useMap();
    map.setView(coordinates, map.getZoom());
    return null;
}

export default SetViewOnClick