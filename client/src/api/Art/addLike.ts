import { addDoc, collection, collectionGroup } from "firebase/firestore";
import { db } from '../../config/firebase';

const likesRef = collection(db, 'likes');

export async function addLike(userId:string | undefined, artId:string){
    try{
        await addDoc( likesRef, {userId: userId, artId: artId});
    } catch(error) {
        console.error('Write to db failed. reason :', error);
    }
}