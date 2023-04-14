import NganuPostApi from "./ds/post";
import NganuUserAPI from "./ds/user";

export interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

export interface ContextValue {
    dataSources: {
        nganuPost: NganuPostApi;
        nganuUser: NganuUserAPI;
    };
}

export interface Comment {
    postId: Number;
    id: Number;
    name: String;
    email: String;
    body: String;
}

export interface User {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
        geo: {
            lat: String;
            lng: String;
        };
    };
    phone: String;
    website: String;
    company: {
        name: String;
        catchPhrase: String;
        bS: String;
    };
}

export interface Album {
    userId: Number;
    id: Number;
    title: String;
}

export interface Photo {
    albumId: Number;
    id: Number;
    title: String;
    url: String;
    thumbnailUrl: String;
}
