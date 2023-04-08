import { shallow } from "zustand/shallow";
import CardDisplay from "../DisplayElements/CardDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import Divider from "@mui/material/Divider";
import Menu from "../../Menu/Menu";
import Title from "../../Title/Title";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import { useArtStore } from "../../../../store/Art/artStore";

const MultiDisplay = () => {

  /* State */
  const { 
    data, 
    setData, 
    artId, 
    artSearchQuery,
    wardSearchQuery, 
    programSearchQuery,
    loading
  } = useArtStore(
    (state) => ({ 
      data : state.data, 
      programSearchQuery: state.programSearchQuery,
      artSearchQuery: state.artSearchQuery,
      wardSearchQuery: state.wardSearchQuery,
      setData : state.setData,
      artId: state.artId,
      loading:state.loading
    }), shallow
  );

  

  return (
    <div className={`overflow-y-auto flex-grow `}>
      
      <div className="text-center pt-8 pb-10">
        <Title title={'Street Art TO'}/>
        <p className="text-xl pt-6 text-zinc-300">Welcome, Anthony.</p>
      </div>
      <Menu/>
      <Divider className='bg-zinc-700' 
        sx={{ height:'2px' , mt:7 , mb:2}}
      />
      <Divider/>
      <div className=" pt-10 ">
      {/* Filter and mapping out Card Display */}
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
              .map((art : IStreetArt, index : number, arr)=>{
                
                if (!art ) {
                  return (<p className="text-white">Nothing to display</p>)
                } 
                return (
                  <CardDisplay
                    key={index} 
                    id={art?.id}
                    title={art?.properties.title} 
                    icon={art?.properties.media[0].thumbnails.large.url} 
                    address={art?.properties.address} 
                    year={art?.properties.year}
                  />
                )
            })
        }
        
      </div>
    </div>
  )
}

export default MultiDisplay