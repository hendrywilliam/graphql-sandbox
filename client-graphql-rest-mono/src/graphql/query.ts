import gql from "graphql-tag";

//CONSTANT QUERIES LIVE HERE

export const ALL_USERS_QUERY = gql`
    query Users {
        users {
            name
            id
            username
            website
            phone
            email
        }
    }
`;

export const USER_QUERY = gql`
    query User($userId: ID!) {
        user(id: $userId) {
            id
            name
            username
            email
            address {
                street
                suite
                city
                zipcode
                geo {
                    lat
                    lng
                }
            }
            phone
            website
            company {
                name
                catchPhrase
                bs
            }
        }
    }
`;
