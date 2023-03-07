import  { InferSchemaType, model, Schema } from 'mongoose';


const ArtSchema = new Schema({
    _id: String,
    likes:Number,
    createdDate: Date,
    fields: {
        address: String,
        identifier:String,
        year:String,
        latitude:String,
        longitude:String,
        description:String,
        image:String,
    }
});


type Art = InferSchemaType<typeof ArtSchema>;
export default model("Art", ArtSchema);