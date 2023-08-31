import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
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
  } = useArtStore();
  
  const windowDimensions = useWindowSize();
  const mapWidth =  '99.9%';

  // Prevent focus from scrolling the map into view
  const preventFocusScroll = (ev: React.FocusEvent<HTMLDivElement>) => {
    // Create a dummy element and scroll it into view
    const dummyElement = document.createElement('div');
    dummyElement.style.height = '1px';
    ev.target.appendChild(dummyElement);
    dummyElement.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    ev.target.removeChild(dummyElement);
  };

  return (
    <div className="flex items-center justify-center">
      <MapContainer 
        center={[43.65306, -79.40125 ]} 
        zoom={13} 
        scrollWheelZoom={true}  
        style={{ 
          height: "99vh", 
          width: `${mapWidth}` 
        }} 
        tap={false} // Disable Leaflet's default tap handling
        zoomControl={false}
      >
        {/* Attach the focus event to prevent scroll */}
        <div onFocus={preventFocusScroll}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
          />
          {/* Filter and mapping out Map Markers */}
          {
            data
              .filter((art : IStreetArt) => {
                return (
                  art?.properties.title.includes(artSearchQuery)  /* artist name filter */
                  && 
                  art?.properties.ward.includes(wardSearchQuery) /* ward filter */
                  &&
                  art?.properties.program.includes(programSearchQuery) /* program filter */
                )
              })
              .map(( art:IStreetArt, index : number )=>{  
                return (
                  <MapMarker 
                    key={index} 
                    id={art.id}
                    latitude={art.geometry.coordinates[1]} 
                    longitude={art.geometry.coordinates[0]} 
                    title={art.properties.title}
                    text={art.properties.description}
                  />
                )
              })  
          }
        </div>
        <ZoomControl 
          position={`${windowDimensions.width <= 850 ? 'topright' : 'bottomright'}`} 
          zoomInText='+' 
          zoomOutText="-" 
        />
      </MapContainer>
    </div>
  )
}

export default Map;
