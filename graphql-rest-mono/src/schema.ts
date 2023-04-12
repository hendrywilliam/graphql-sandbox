import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        post: [Post!]!
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
    }
`;

export default typeDefs;
