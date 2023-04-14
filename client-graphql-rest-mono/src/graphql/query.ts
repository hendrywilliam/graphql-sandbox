import gql from "graphql-tag";

//CONSTANT QUERIES LIVE HERE

export const ALL_USERS_QUERY = gql`
    query Users {
        users {
            name
            id
            username
            website
        }
    }
`;
