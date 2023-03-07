import express from 'express';
import { createArtController } from '../controllers/Art/createArtController';
import { getAllArtController } from '../controllers/Art/getAllArtController';

const router = express.Router();

router.get('/', getAllArtController); 
router.post('/', createArtController);

export default router