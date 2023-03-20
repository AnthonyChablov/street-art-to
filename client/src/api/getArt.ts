
export interface IART {
    likes: Number,
    comments : [],
    createdTime : String,
    fields: IFields
    id: Number, 
    linkedTables : number | null | undefined,
    tables: number | null | undefined,
}

interface IFields {
    address: String, 
    description: String,
    Gmap : String,
    Identifier: String,
    latitude : String,
    longitude: String,
    year : String,
    featured_media : String,
}


