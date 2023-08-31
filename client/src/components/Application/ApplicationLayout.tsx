import { useQuery } from 'react-query';
import useWindowSize from '../../hooks/useWindowDimensions';
import { getDocs } from 'firebase/firestore';
import { useArtStore } from '../../store/Art/artStore';
import Map from './Map/Map';
import Sidebar from './Sidebar/Sidebar';
import SideDrawer from './SideDrawer/SideDrawer';
import SideDrawerArt from './SideDrawer/SideDrawerArt';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerStore } from '../../store/Drawer/drawerStore';
import SpeedDialMenu from './SpeedDial/SpeedDialMenu';
import { newArtCollectionRef } from '../../api/Art/getArt';
import Header from '../Common/Header/Header';

/* TODO implement red light, yellow light, and green light for components */

const ApplicationLayout = () => {

    const windowDimensions = useWindowSize();

    /* State */
    const { setData,  } = useArtStore();
    const { toggleSideBar, setToggleSideBar } = useDrawerStore();

    /* Fetch Data */
    const {
      isFetching : isFetchingArt, 
      isLoading : isLoadingArt, 
      isError:isErrorArt, 
      isSuccess:isSuccessArt
    } = useQuery( 
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

    if(isErrorArt) 
      return (<Error/>);
    else if(isLoadingArt) 
      return (<Loading/>);
    else 
      return (
        <>
          <div className=''>
            <Map/>
            {
              /* render Sidebar for mobile, Card for large screens */
              windowDimensions.width >= 850
                ? <>
                    <div className="fixed top-5 left-8 z-0">
                      <Button className='bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr'
                        variant='contained' 
                        onClick={()=>{
                          setToggleSideBar(!toggleSideBar)
                        }}
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
                      <Header/>
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