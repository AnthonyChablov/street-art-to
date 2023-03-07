import {NextFunction, Request, Response} from 'express';
import ArtModel from '../../models/Art'; // mongodb model

export async function getAllArtController(req: Request, res:Response, next:NextFunction){

    try{

        const art = await ArtModel.find();
        if (!art){
            return res.status(400).send('No tasks exist');
        }
        res.json(art);
        
    }catch(error){
        next(error);
    }
}