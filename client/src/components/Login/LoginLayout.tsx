import { useState } from 'react'; // the auth variable is used for signing in user and retrieving already signed in user 
import {auth, googleProvider, db} from '../../config/firebase';
import { signInWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import TextField  from '@mui/material/TextField';
import Separator from '../Common/Form/FormElements/Separator';
import FormFooter from '../Common/Form/FormElements/FormFooter';

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
        }
    }

    async function loginWithGoogle(){
        try {
            await signInWithPopup(auth, googleProvider)
        } catch(error) {    
            console.error(error);
        }
    }

    async function logout(){
        try {
            await signOut(auth);
        } catch(error) {    
            console.error(error);
        }
    }

    return (
        <div className="bg-zinc-800 h-screen  flex items-center">
            <div className=' bg-zinc-300 w-5/6 mx-auto p-10 rounded-xl h-fit'>
                <h1 className='font-empire text-6xl text-zinc-900 text-center mb-11'>
                    StreetArt To
                </h1>
                <div className='flex flex-col'>
                    <div className=" pb-6">
                        <TextField id="standard-basic" 
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
                            label="Password" 
                            variant="filled" 
                            fullWidth
                            onChange={(e)=> setPassword(e.target.value)}
                            sx={{
                                pb:1
                            }}
                        />
                        <div className="text-right">
                            <button >
                                <p className='text-right text-md font-medium hover:text-zinc-500 hover:underline'>
                                    Forgot Password
                                </p>
                            </button>
                        </div>
                        
                    </div>
                    <div className="flex flex-col pt-4">
                        <Button onClick={login} variant='contained' sx={{backgroundColor:"grey", borderRadius:100, py:1.1 }}>
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
                    <FormFooter title={"Don't have an account?"} buttonText={'Sign Up'}/>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout