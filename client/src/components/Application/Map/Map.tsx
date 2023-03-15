import { MapContainer, TileLayer, useMap, Popup, Marker, ZoomControl } from 'react-leaflet'

const Map = () => {
 

  return (
    <MapContainer 
      center={[43.651070, -79.347015]} 
      zoom={13} 
      scrollWheelZoom={true}  
      style={{ height: "100vh", width:'73%' }} 
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