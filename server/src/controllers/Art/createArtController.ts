import {NextFunction, Request, Response} from 'express';
import ArtModel from '../../models/Art'; // mongodb model

export async function createArtController(req: Request, res:Response, next:NextFunction){

    try{
        // create new art
        const newArt = new ArtModel({
            likes: 0,
            createdDate: new Date().toJSON().slice(0, 10),
            fields: {
                address: req.body.address,
                identifier: req.body.identifier,
                year: req.body.year,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                description: req.body.description,
                fields : req.body.image,
            }
        });

        // persist to db 
        const createdTodo = await newArt.save();
        // send created todo back to user
        res.json(createdTodo);
    }catch(error){
        next(error);
    }
}