export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface IVariables {
    userId: string | string[];
}

export interface IAlbumId {
    albumId: string | string[];
}

export interface IAlbum {
    id: number | string;
    title: string;
}
