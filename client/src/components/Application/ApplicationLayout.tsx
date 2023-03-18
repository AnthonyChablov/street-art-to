import Map from './Map/Map'
import useWindowSize from '../../hooks/useWindowDimensions'
import SwipeDrawer from './SwipeDrawer/SwipeDrawer';
import Sidebar from './Sidebar/Sidebar';
import Title from './Title/Title';
import Navbar from './Navbar/Navbar';

const ApplicationLayout = () => {
  const windowDimensions = useWindowSize();
  return (
    <div className='h-screen'>
      <Title/>
      <Map/>
      {
        /* render Sidebar for mobile, Card for large screens */
        windowDimensions.width >= 850
          ? <>
              <Navbar/>
              <Sidebar/>
            </>      
          : <SwipeDrawer/>
      }
    </div>
  )
}

export default ApplicationLayout