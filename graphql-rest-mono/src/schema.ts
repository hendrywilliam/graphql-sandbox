import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: ID!): Post
        users: [User!]!
        user(id: ID!): User
        albums: [Album!]!
        album(id: ID!): Album
    }

    type Mutation {
        createPost(post: NewPostInput!): CreateNewPostResponse!
    }

    type Post {
        "User's id for this post"
        userId: Int!
        "Post's ID"
        id: Int!
        "Post's title"
        title: String!
        "Post's main content"
        body: String!
        comment: [Comment!]!
    }

    type Comment {
        postId: Int!
        id: Int!
        name: String!
        email: String
        body: String!
    }

    type User {
        id: Int!
        name: String!
        username: String!
        email: String!
        address: Address!
        phone: String!
        website: String!
        company: Company!
        posts: [Post!]
    }

    type Address {
        street: String!
        suite: String!
        city: String!
        zipcode: String!
        geo: Geolocation!
    }

    type Geolocation {
        lat: String!
        lng: String!
    }

    type Company {
        name: String!
        catchPhrase: String!
        bs: String!
    }

    type Album {
        userId: Int
        id: Int
        title: String!
        photos: [Photo!]
    }

    type Photo {
        albumId: Int!
        id: Int!
        title: String!
        url: String!
        thumbnailUrl: String!
    }

    input NewPostInput {
        userId: Int!
        title: String!
        body: String!
    }

    type CreateNewPostResponse {
        code: Int!
        success: String!
        message: String!
        post: Post
    }
`;

export default typeDefs;
