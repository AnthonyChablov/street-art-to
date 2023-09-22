export interface IStreetArt {
  geometry: IGeometry;
  id: string;
  properties: IProperties;
  socials: ISocials;
  type: string;
}

interface IGeometry {
  coordinates: number[];
  type: String;
}

interface IProperties {
  address: string;
  description: string;
  media: Array<IMedia>;
  medium: string;
  organizations: string;
  program: string;
  status: string;
  title: string;
  uid: number;
  ward: string;
  year: number;
}

interface IMedia {
  filename: string;
  id: string;
  size: number;
  thumbnails: IThumbnails;
}

interface IThumbnails {
  large: {
    height: number;
    url: string;
    width: number;
  };
}

interface ISocials {
  comments: (string | number)[];
  likes: string[];
}
