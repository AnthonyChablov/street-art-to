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
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Navbar from './Navbar/Navbar';
import { auth } from '../../config/firebase';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerStore } from '../../store/Drawer/drawerStore';

 /* TODO implement red light, yellow light, and green light for components */

const ApplicationLayout = () => {

    const windowDimensions = useWindowSize();
    const newArtCollectionRef = collectionGroup(db, 'newArt');

    /* State */
    const { data, setData, artId, artSearchQuery, wardSearchQuery, programSearchQuery, setLoading } = useArtStore(
      (state) => ({ 
        data : state.data, 
        setData : state.setData,
        artId: state.artId,
        wardSearchQuery: state.wardSearchQuery,
        artSearchQuery: state.artSearchQuery,
        programSearchQuery:state.programSearchQuery,
        setLoading: state.setLoading
      }), shallow
    );

    const { toggleSideBar, setToggleSideBar } = useDrawerStore(
      (state) => ({ 
        toggleSideBar: state.toggleSideBar,
        setToggleSideBar: state.setToggleSideBar,
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
      setLoading(isLoading)
    },[])

    if(isError) 
      return (<Error/>)
    else if(isLoading) 
      return (<Loading/>) 
    else 
      return (
        <>
          <div className='h-screen'>
            <Map/>
            {
              /* render Sidebar for mobile, Card for large screens */
              windowDimensions.width >= 850
                ? <>
                    <div className="fixed top-5 left-8 z-0">
                      <Button variant='contained'
                        onClick={()=>{setToggleSideBar(!toggleSideBar)}}
                      >
                        <MenuIcon fontSize='medium'/>
                      </Button>
                    </div>
                    <Sidebar/>
                    <SideDrawer userName='Anthony'/>
                    <SideDrawerArt/>
                  </>      
                : <SwipeDrawer/>
            }
          </div>
        </>
      )
}

export default ApplicationLayout