import { useQuery } from 'react-query';
import { useEffect } from 'react';
import {shallow} from 'zustand/shallow';
import useWindowSize from '../../hooks/useWindowDimensions';
import { getDocs, query, where } from 'firebase/firestore';
import { useArtStore } from '../../store/Art/artStore';
import Map from './Map/Map';
import Sidebar from './Sidebar/Sidebar';
import SideDrawer from './SideDrawer/SideDrawer';
import SideDrawerArt from './SideDrawer/SideDrawerArt';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { auth } from '../../config/firebase';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerStore } from '../../store/Drawer/drawerStore';
import { useLikeStore } from '../../store/Like/likeStore';
import SpeedDialMenu from './SpeedDial/SpeedDialMenu';
import ToastBox from './ToastBox/ToastBox';
import { likesRef } from '../../api/Likes/addLike';
import { newArtCollectionRef } from '../../api/Art/getArt';
import Header from '../Common/Header/Header';

/* TODO implement red light, yellow light, and green light for components */

const ApplicationLayout = () => {

    const windowDimensions = useWindowSize();
    /* Logged in User Info From Firebase */
    const [user] = useAuthState(auth);
  
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

    const {likeData, setLikeData} = useLikeStore((state) => ({ 
      likeData: state.likeData,
      setLikeData: state.setLikeData,
    }), shallow);

    /* Fetch Data */
    /* Fetch all art */
    const {

      isFetching : isFetchingArt, 
      isLoading : isLoadingArt, 
      isError:isErrorArt, 
      isSuccess:isSuccessArt} = useQuery( 
      'art', 
      () => getArt
    ); 

    /* Fetch all Likes */
    const {

      isFetching : isFetchingLikes, 
      isLoading : isLoadingLikes, 
      isError:isErrorLikes, 
      isSuccess:isSuccessLikes, 
      refetch
    } = useQuery( 
      'likes', 
      () => getLikes
        
    ); 
          
    async function getArt() {
      let fetchedData = await getDocs(newArtCollectionRef);
      const filteredData = fetchedData.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setData(filteredData);
      
    }

    async function getLikes() {
      const likesDocs = query(likesRef, where("userId", "==", user?.uid ||''));
      let fetchedData = await getDocs(likesRef);
      const filteredData = fetchedData.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setLikeData(filteredData);
    }
   
    useEffect(()=>{
      setLoading(isLoadingArt);
    },[])

    if(isErrorArt) 
      return (<Error/>);
    else if(isLoadingArt) 
      return (<Loading/>);
    else 
      return (
        <>
          <div className=''>
            <Map/>
            <ToastBox/>
            <Header/>
            {
              /* render Sidebar for mobile, Card for large screens */
              windowDimensions.width >= 850
                ? <>
                    <div className="fixed top-5 left-8 z-0">
                      <Button className='bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr'
                        variant='contained' 
                        onClick={()=>{setToggleSideBar(!toggleSideBar)}}
                      >
                        <MenuIcon fontSize='medium'/>
                      </Button>
                    </div>
                    <Sidebar/>
                    <SideDrawer userName='Anthony'/>
                    <SideDrawerArt/>
                  </>      
                : ( // on mobile and small tablets
                    <>
                      <SpeedDialMenu/>
                      <Sidebar/>
                      <SideDrawer userName='Anthony'/>
                      <SideDrawerArt/>
                    </>
                  )
            }
          </div>
        </>
      );
}

export default ApplicationLayout