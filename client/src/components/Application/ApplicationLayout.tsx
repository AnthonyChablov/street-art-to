import { useQuery } from 'react-query';
import {shallow} from 'zustand/shallow';
import useWindowSize from '../../hooks/useWindowDimensions';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useArtStore } from '../../store/Art/artStore';
import Map from './Map/Map';
import SwipeDrawer from './SwipeDrawer/SwipeDrawer';
import Sidebar from './Sidebar/Sidebar';
import Title from './Title/Title';
import Navbar from './Navbar/Navbar';

 /* TODO implement red light, yellow light, and green light for components */

const ApplicationLayout = () => {

    const windowDimensions = useWindowSize();
    const artCollectionRef = collection(db, 'art');

    /* State */
    const { data, setData } = useArtStore(
      (state) => ({ 
        data : state.data, 
        setData : state.setData
      }), shallow
    );

    /* Fetch all art */
    const {isLoading, isError, refetch} = useQuery( 
      'art', 
      () => getArt
    ); 
    
    async function getArt() {
      let fetchedData = await getDocs(artCollectionRef);
      const filteredData = fetchedData.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setData(filteredData);
    }
   
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