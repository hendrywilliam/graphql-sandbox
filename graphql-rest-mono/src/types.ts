import NganuAPI from "./ds/api";

export interface Movie {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

export interface ContextValue {
    dataSources: {
        nganuPost: NganuAPI;
    };
}

export interface Comment {
    postId: Number;
    id: Number;
    name: String;
    email: String;
    body: String;
}
