import { useMemo } from "react";
import { debounce } from "lodash";
import { TextField} from "@mui/material";
import { motion } from "framer-motion";
import { shallow } from "zustand/shallow";
import InputAdornment from "@mui/material/InputAdornment";
import { useArtStore } from "../../../store/Art/artStore";
import { IStreetArt } from "../../../models/streetArt";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const menuVariants = {
  initial:{
      y:-30,
      opacity:0,
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
          type: 'tween',
          ease: 'easeInOut',
          duration: .33,
          when: '',
      }
  },
}

const Menu = () => {

  const { 
      data, 
      artSearchQuery,
      setArtSearchQuery, 
      wardSearchQuery, 
      setWardSearchQuery, 
      programSearchQuery,
      setProgramSearchQuery 
  } = useArtStore((state) => ({ 
      data : state.data,
      artSearchQuery : state.artSearchQuery,
      setArtSearchQuery : state.setArtSearchQuery,
      wardSearchQuery : state.wardSearchQuery,
      setWardSearchQuery : state.setWardSearchQuery,
      programSearchQuery : state.programSearchQuery,
      setProgramSearchQuery : state.setProgramSearchQuery,
    }), shallow
  );
 
  const uniqueProgramCategories = [...new Set(data.map((art:IStreetArt ) => art.properties.program))];
  const uniqueWardCategories = [...new Set(data.map((art:IStreetArt ) => art.properties.ward))];

  let debounceTime = 300;
  
  function artistChangeHandeller(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setArtSearchQuery(e.target.value);
  }

  function programChangeHandeller(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setProgramSearchQuery(e.target.value);
  }

  function wardChangeHandeller(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setWardSearchQuery(e.target.value); 
  }

  const debouncedArtistChangeHandler = useMemo(
    ()=> debounce(artistChangeHandeller, debounceTime)
  , [])


  return (
    
    <motion.div className="bg-zinc-500 rounded-b-2xl h-56 fixed top-0 right-0 
      w-4/12 z-50 p-5 px-10 shadow-xl pt-4"
      variants={menuVariants}
      initial='initial'
      animate='animate'
    >
      {/* Search Artists */}
      <div className="mb-4 shadow-lg">
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Artists"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        {/* <TextField
          id="search-bar"
          className="text"
          fullWidth
          onChange={debouncedArtistChangeHandler}
          value={artSearchQuery}
          label="Search Artist ..."
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{  }} />
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{}}
        /> */}
      </div>
      {/* Filter Program */}
      <div className="mt-3">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Filter By Program"
          SelectProps={{
            native: true,
          }}
          fullWidth
          onChange={programChangeHandeller}
          value={programSearchQuery}
        >
          <option>
            {''}
          </option>
          {
            uniqueProgramCategories.map((option, index) => (
              <option key={index}>
                {option}
              </option>
            ))
          } 
        </TextField>
      </div>
      {/* Filter Region */}
      <div className="mt-3">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Filter By Ward"
          SelectProps={{
            native: true
          }}
          fullWidth
          onChange={wardChangeHandeller}
          value={wardSearchQuery}
        >
          <option>
            {''}
          </option>
          {
            uniqueWardCategories.map((option, index) => (
              <option key={index}>
                {option}
              </option>
            ))
          }
        </TextField>
      </div>
    </motion.div>
  )

}

export default Menu