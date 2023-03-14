import Map from './Map/Map'
import useWindowSize from '../../hooks/useWindowDimensions'
import SwipeDrawer from './SwipeDrawer/SwipeDrawer';

const ApplicationLayout = () => {
  const windowDimensions = useWindowSize();
  return (
    <div className='h-screen'>
      <Map/>
      {
        /* render Sidebar for mobile, Card for large screens */
        windowDimensions.width >= 850
          ? ''
          : <SwipeDrawer/>
      }
    </div>
  )
}

export default ApplicationLayout