export interface IStreetArt{
    geometry: IGeometry
    id: number,
    properties : IProperties,
    socials: ISocials,
    type: String
}

interface IGeometry{
    coordinates: [],
    type:String,
   
}

interface IProperties{
    address: String,
    description : String,
    media: [IMedia],
    program: String, 
    status: String,
    title: String,
    uid: number,
    ward: String,
    year: number

}

interface IMedia{
    filename: String,
    id: String,
    size: number,
    thumbnails: IThumbnails

}

interface IThumbnails{
    large:{
        height: number,
        url: String,
        width: number
    }
}

interface ISocials{
    comments: [],
    likes: number,
}