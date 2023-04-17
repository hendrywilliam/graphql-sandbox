import NganuPostApi from "./ds/post";
import NganuUserAPI from "./ds/user";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ContextValue {
    dataSources: {
        nganuPost: NganuPostApi;
        nganuUser: NganuUserAPI;
    };
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface User {
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
        bS: string;
    };
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface MutationResponse {
    code: string;
    success: boolean;
    message: string;
}

export interface CreatePostWithResponse extends MutationResponse {
    post: Post;
}
