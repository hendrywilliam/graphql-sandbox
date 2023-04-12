import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: ID!): Post
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
        email: String!
        body: String!
    }
`;

export default typeDefs;
