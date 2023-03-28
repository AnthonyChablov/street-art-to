import { useMemo } from "react";
import { debounce } from "lodash";
import { TextField} from "@mui/material";
import { shallow } from "zustand/shallow";
import InputAdornment from "@mui/material/InputAdornment";
import { useArtStore } from "../../../store/Art/artStore";
import { IStreetArt } from "../../../models/streetArt";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";


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
  const uniqueWardCategories = [...new Set(data.map((art:IStreetArt ) => art.properties.ward).sort((a, b)=>(+a)-(+b)))];
  const debounceTime = 300;
  
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
    <div className="bg-gradient-to-r from-slate-600 via-zinc-600 
    to-zinc-800 opacity-80 rounded-lg p-5 space-y-5 ">
      {/* Search Artists */}
      <div className=" shadow-lg">
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
      </div>
      {/* Filter Program */}
      <div className="mt-3 shadow-lg">
        <TextField
          className="bg-zinc-100 rounded-md flex text-zinc-800 "
          id="outlined-select-currency-native"
          select
          label="Filter By Program"
          SelectProps={{
            native: true,
          }}
          fullWidth
          onChange={programChangeHandeller}
          value={programSearchQuery}
          InputProps={{
            style: {
                color: "gray",
            }
          }}
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
      <div className="mt-3 shadow-lg">
        <TextField
          className="bg-zinc-100 rounded-md"
          id="outlined-select-currency-native"
          select
          label="Filter By Ward"
          SelectProps={{
            native: true
          }}
          fullWidth
          onChange={wardChangeHandeller}
          value={wardSearchQuery}
          InputProps={{
            style: {
                color: "gray",
            }
          }}
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
    </div>
  )

}

export default Menu