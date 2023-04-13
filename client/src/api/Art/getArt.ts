import { collectionGroup } from "firebase/firestore";
import { db } from "../../config/firebase";

export const newArtCollectionRef = collectionGroup(db, 'newArt');