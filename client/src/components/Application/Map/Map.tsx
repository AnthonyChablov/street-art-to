import { MapContainer, TileLayer, Popup, Marker, ZoomControl } from 'react-leaflet'
import useWindowSize from '../../../hooks/useWindowDimensions'

const Map = () => {

  const windowDimensions = useWindowSize();
  const mapWidth = windowDimensions.width >= 850 ? '73%' : '100%';
  
  return (
    <MapContainer 
      center={[43.651070, -79.347015]} 
      zoom={13} 
      scrollWheelZoom={true}  
      style={{ height: "100vh", width: `${mapWidth}` }} 
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
      <Marker 
        position={[43.651070,  -79.347015]} 
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <div >
          <ZoomControl position='bottomright' zoomInText='+' zoomOutText="-" />
        </div>
      </Marker>
    </MapContainer>
  )
}

export default Map