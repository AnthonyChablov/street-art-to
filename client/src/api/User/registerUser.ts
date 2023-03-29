import {auth, googleProvider, db} from '../../config/firebase';
import { createUserWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import { Auth } from 'firebase/auth';

interface IRegisterUser{
    auth:Auth,
    email:string,
    password:string,
    setErrorMessage:Function
}

export async function registerUser({auth, email, password, setErrorMessage}:IRegisterUser){
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {    
        console.error(error);
        setErrorMessage();
    }
  }