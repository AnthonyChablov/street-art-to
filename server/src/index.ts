import 'dotenv/config';
import express, {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import cors from 'cors';
import artRoutes from './routes/artRoutes';

config();
const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res:Response)=>{
    res.send('Street art to server running');
});

app.use('/api/todo', artRoutes);



mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT);
});