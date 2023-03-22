import { useState } from "react"
import {auth, googleProvider, db} from '../../config/firebase';
import { createUserWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField  from '@mui/material/TextField';
import Separator from '../Common/Form/FormElements/Separator';
import FormFooter from '../Common/Form/FormElements/FormFooter';
import StreetArtImage from "../Common/Image/StreetArtImage";
import FormError from "../Common/Form/FormElements/FormError";

const registerVariants = {
  initial:{
    opacity:0,
    y:-20,
  },
  animate:{
    opacity: 1,
    y:0,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.7,
      when: ''
    }
  },
}

const RegisterLayout = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError]  = useState(false);

  async function register(){
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {    
        console.error(error);
        setErrorMessage()
    }
  }

  async function loginWithGoogle(){
    try {
        await signInWithPopup(auth, googleProvider)
    } catch(error) {    
        console.error(error);
        setErrorMessage();
    }
  }

  async function setErrorMessage(){
    setIsError(true);
    setTimeout(() => setIsError(false), 5000);
  };

  return (
    <>
      <div className="bg-zinc-800  bg-gradient-to-r from-zinc-800 to-zinc-900 h-screen  
        flex flex-row-reverse items-center lg:justify-end">
            <StreetArtImage/>
            <div className=' bg-zinc-300 w-5/6 mx-auto p-10 rounded-xl h-fit md:max-w-xl 
                lg:mx-0 lg:h-screen lg:flex lg:flex-col lg:justify-center 
                lg:max-w-full lg:w-5/12 lg:rounded-none '
            >
              <motion.div className="lg:max-w-3xl mx-auto" variants={registerVariants}
              initial='initial'
              animate='animate'> 
                <h1 className='font-empire text-6xl text-zinc-900 text-center mb-11'>
                    StreetArt To
                </h1>
                <div className='flex flex-col'>
                    <div className=" pb-2">
                        <TextField id="standard-basic" 
                            error = {isError}
                            label="Email" 
                            variant="filled" 
                            fullWidth
                            onChange={(e)=> setEmail(e.target.value)}
                            sx={{
                                background:'#d4d4d8',
                                pb:3
                            }}
                        />
                        <TextField id="outlined-password-input" 
                            error = {isError}
                            label="Password" 
                            variant="filled" 
                            fullWidth
                            onChange={(e)=> setPassword(e.target.value)}
                            sx={{
                                pb:1
                            }}
                        />
                    </div>
                    {/* Error msg */}
                    <div className={`${!isError && 'pt-6'}`}>
                      {
                        isError 
                          && 
                            <div className="text-center">
                              <FormError message={'Invalid Register Details'}/>
                            </div>
                      }
                    </div>
                    <div className="flex flex-col pt-4">
                        <Button onClick={register} variant='contained' sx={{backgroundColor:"grey", borderRadius:100, py:1.1 }}>
                            Register
                        </Button>
                        <Separator/>
                        <Button 
                            variant='contained' 
                            sx={{backgroundColor:"grey" , borderRadius:100, py:1.1}}
                            onClick={loginWithGoogle} 
                        > 
                            <GoogleIcon fontSize='small'/>
                            <span className='ml-2.5'>Register with google</span>
                        </Button>
                        {/* <button onClick={logout}>Logout</button> */}
                    </div>
                    <FormFooter title={"Have an account?"} buttonText={'Sign In'} link={'/login'}/>
                </div>
              </motion.div>
            </div>
        </div>
    </>
  )
}

export default RegisterLayout