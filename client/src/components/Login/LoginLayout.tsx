import { useState, useRef } from 'react'; // the auth variable is used for signing in user and retrieving already signed in user 
import {auth, googleProvider, db} from '../../config/firebase';
import { signInWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField  from '@mui/material/TextField';
import Separator from '../Common/Form/FormElements/Separator';
import FormFooter from '../Common/Form/FormElements/FormFooter';
import StreetArtImage from "../Common/Image/StreetArtImage";
import FormError from '../Common/Form/FormElements/FormError';
import useWindowSize from '../../hooks/useWindowDimensions';

const loginVariants = {
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
        duration: 0.6,
        when: ''
      }
    },
}

const LoginLayout = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError]  = useState(false);
    
    /* console.log(auth?.currentUser?.email); */
    /* console.log(auth?.currentUser?.photoURL); */  // can also getch google profile photo or fb whatever login provider etc

    async function login(){
        try{ // whenever we are dealing with async functions need to be error handelling
            await signInWithEmailAndPassword(auth, email, password);
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
            setErrorMessage()
        }
    }

    async function logout(){
        try {
            await signOut(auth);
        } catch(error) {    
            console.error(error);
            setErrorMessage()
        }
    }

    async function setErrorMessage(){
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
    };

    /* Hooks */
    const layoutRef = useRef<HTMLInputElement>(null); 
    const windowHeight = useWindowSize().height;

    return (
        <div className={`bg-zinc-800 bg-gradient-to-r from-zinc-800 to-zinc-900  min-h-screen max-h-fit 
            ${windowHeight> 650 && 'max-h-full'} `}
            ref={layoutRef }
        >
            <div className={`
                flex items-center lg:justify-end ${windowHeight> 650 && 'h-screen'}`}
            >
                <StreetArtImage mode={1}/>
                <div className=' bg-zinc-300 w-5/6 mx-auto p-10 rounded-xl h-fit md:max-w-xl 
                    lg:mx-0 lg:h-screen lg:flex lg:flex-col lg:justify-center 
                    lg:max-w-full lg:w-5/12 lg:rounded-none '
                >
                    <motion.div className="lg:max-w-3xl mx-auto " 
                        variants={loginVariants}
                        initial='initial'
                        animate='animate'
                    > 
                        <h1 className='font-empire text-6xl text-zinc-900 text-center mb-11'>
                            StreetArt To
                        </h1>
                        <div className='flex flex-col'>
                            <div className=" pb-6">
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
                                <div className="flex flex-row justify-between">
                                {/* Error msg */}
                                    <div>
                                        { isError 
                                            && 
                                            (<FormError message={'Invalid Login Details'}/>)
                                        }
                                    </div>
                                    <button >
                                        <p className='text-right text-md font-medium hover:text-zinc-500 hover:underline text-[#1769aa]'>
                                            Forgot Password
                                        </p>
                                    </button>
                                </div>
                                
                            </div>
                            <div className="flex flex-col pt-2">
                                <Button 
                                    onClick={login} 
                                    variant='contained' 
                                    sx={{backgroundColor:"grey", borderRadius:100, py:1.1 }}
                                >
                                    Sign In
                                </Button>
                                <Separator/>
                                <Button 
                                    variant='contained' 
                                    sx={{backgroundColor:"grey" , borderRadius:100, py:1.1}}
                                    onClick={loginWithGoogle} 
                                > 
                                    <GoogleIcon fontSize='small'/>
                                    <span className='ml-2.5'>Sign in with google</span>
                                </Button>
                                {/* <button onClick={logout}>Logout</button> */}
                            </div>
                            <FormFooter title={"Don't have an account?"} buttonText={'Sign Up'} link={'/register'}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout