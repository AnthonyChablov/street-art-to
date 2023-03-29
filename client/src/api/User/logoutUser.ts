import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';


export async function logOutUser(){
    try {
        await signOut(auth)
    } catch(error) {    
        console.error(error);
    }
  }