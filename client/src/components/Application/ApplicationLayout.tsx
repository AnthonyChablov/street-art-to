import { useQuery } from 'react-query';
import { useEffect } from 'react';
import {shallow} from 'zustand/shallow';
import useWindowSize from '../../hooks/useWindowDimensions';
import { db } from '../../config/firebase';
import { getDocs, collectionGroup } from 'firebase/firestore';
import { useArtStore } from '../../store/Art/artStore';
import Map from './Map/Map';
import SwipeDrawer from './SwipeDrawer/SwipeDrawer';
import Sidebar from './Sidebar/Sidebar';
import SideDrawer from './SideDrawer/SideDrawer';
import SideDrawerArt from './SideDrawer/SideDrawerArt';
import { IStreetArt } from '../../models/streetArt';
import Navbar from './Navbar/Navbar';
import { auth } from '../../config/firebase';

 /* TODO implement red light, yellow light, and green light for components */

const ApplicationLayout = () => {

    const windowDimensions = useWindowSize();
    const artCollectionRef = collectionGroup(db, 'art');
    const newArtCollectionRef = collectionGroup(db, 'newArt');

    /* State */
    const { data, setData, artId, artSearchQuery, wardSearchQuery, programSearchQuery } = useArtStore(
      (state) => ({ 
        data : state.data, 
        setData : state.setData,
        artId: state.artId,
        wardSearchQuery: state.wardSearchQuery,
        artSearchQuery: state.artSearchQuery,
        programSearchQuery:state.programSearchQuery,
      }), shallow
    );

    /* Fetch all art */
    const {isFetching, isLoading, isError, isSuccess, refetch} = useQuery( 
      'art', 
      () => getArt
    ); 
    
    async function getArt() {
      let fetchedData = await getDocs(newArtCollectionRef);
      const filteredData = fetchedData.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      
      setData(filteredData);
    }
   
    useEffect(()=>{
      console.log(data);
      console.log(auth.currentUser);
    },[])

    return (
      <div className='h-screen'>
        {!isLoading && isSuccess && <Map/>}
        {
          /* render Sidebar for mobile, Card for large screens */
          windowDimensions.width >= 850
            ? <>
                <Sidebar/>
                <SideDrawer userName='Anthony'/>
                <SideDrawerArt/>
              </>      
            : <SwipeDrawer/>
        }
      </div>
    )
}

export default ApplicationLayout