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

export const QUERY_ALBUMS = gql`
    query Albums {
        albums {
            id
            title
        }
    }
`;

//this will query an album with tha photos within it.
export const QUERY_PHOTOS_IN_ALBUM = gql`
    query Album($albumId: ID!) {
        album(id: $albumId) {
            id
            title
            photos {
                id
                title
                url
                thumbnailUrl
            }
        }
    }
`;
