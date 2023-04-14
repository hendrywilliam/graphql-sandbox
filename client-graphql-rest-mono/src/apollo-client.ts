import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";

const linknya = createHttpLink({
    uri: "http://localhost:6969/graphql",
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: linknya,
    cache,
});
