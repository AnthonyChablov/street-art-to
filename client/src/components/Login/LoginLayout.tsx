import { useState } from 'react'; // the auth variable is used for signing in user and retrieving already signed in user 
import {auth, googleProvider, db} from '../../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';



const LoginLayout = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* console.log(auth?.currentUser?.email); */
    /* console.log(auth?.currentUser?.photoURL); */  // can also getch google profile photo or fb whatever login provider etc

    async function login(){
        try{ // whenever we are dealing with async functions need to be error handelling
            await createUserWithEmailAndPassword(auth, email, password);
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
            
        }
    }

    return (
        <div className='text-center'>
            <div >
                <input placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                <div className="flex justify-center space-x-5">
                    <button onClick={login}>Sign In</button>

                    <button onClick={loginWithGoogle}> Sign in with google</button>

                    <button onClick={logout}>Logout</button>

                </div>
                
            </div>

            
        </div>
  )
}

export default LoginLayout