import Map from './Map/Map'
import useWindowSize from '../../hooks/useWindowDimensions'
import SwipeDrawer from './SwipeDrawer/SwipeDrawer';
import Sidebar from './Sidebar/Sidebar';


const ApplicationLayout = () => {
  const windowDimensions = useWindowSize();
  return (
    <div className='h-screen'>
      
      <Map/>
      {
        /* render Sidebar for mobile, Card for large screens */
        windowDimensions.width >= 850
          ? <Sidebar/>
          : <SwipeDrawer/>
      }
    </div>
  )
}

export default ApplicationLayout