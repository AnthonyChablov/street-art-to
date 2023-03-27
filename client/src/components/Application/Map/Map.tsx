import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { shallow } from 'zustand/shallow';
import useWindowSize from '../../../hooks/useWindowDimensions';
import { useArtStore } from '../../../store/Art/artStore';
import MapMarker from './MapMarker';
import { IStreetArt } from '../../../models/streetArt';

const Map = () => {

  /* State */
  const { 
    data,
    artSearchQuery,
    wardSearchQuery, 
    programSearchQuery ,
    mapCenter  
  } = useArtStore((state) => ({ 
      data : state.data, 
      programSearchQuery: state.programSearchQuery,
      artSearchQuery: state.artSearchQuery,
      wardSearchQuery: state.wardSearchQuery,
      mapCenter: state.mapCenter
    }), shallow
  );
  
  const windowDimensions = useWindowSize();
  const mapWidth = windowDimensions.width >= 850 ? '66.66%' : '100%';

  return (
    <MapContainer 
      center={[43.651070, -79.347015]} 
      zoom={13} 
      scrollWheelZoom={true}  
      style={{ height: "100vh", width: `${mapWidth}` }} 
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> 
        &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
        <>
        {/* Filter and mapping out Map Markers */}
          {
            data
              .filter((art : IStreetArt) => {
                return (
                  art?.properties.title.includes(artSearchQuery) 
                    && 
                  art?.properties.ward.includes(wardSearchQuery)
                    &&
                  art?.properties.program.includes(programSearchQuery)
                )
              })
              .map(( art:IStreetArt, index : number )=>{  
                return (
                  <MapMarker 
                    key={index} 
                    id={index}
                    latitude={art.geometry.coordinates[1]} 
                    longitude={art.geometry.coordinates[0]} 
                    title={art.properties.title}
                    text={art.properties.description}
                  />
                )
              })  
          }
        </>
      <ZoomControl 
        position={`${windowDimensions.width <= 850 ? 'topright' : 'bottomright'}`} 
        zoomInText='+' 
        zoomOutText="-" 
      />
    </MapContainer>
  )
}

export default Map



