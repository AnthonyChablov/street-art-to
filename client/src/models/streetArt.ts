export interface IStreetArt{
    geometry: IGeometry
    id: number,
    properties : IProperties,
    socials: ISocials,
    type: String
}

interface IGeometry{
    coordinates: number[],
    type:String
}

interface IProperties{
    address: String,
    description : String,
    media: Array<IMedia>,
    medium: String,
    organizations: String,
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
        url: string,
        width: number
    }
}

interface ISocials{
    comments: (string | number)[],
    likes: number,
}