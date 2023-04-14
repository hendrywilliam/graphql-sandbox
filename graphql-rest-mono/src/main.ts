import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import NganuPostApi from "./ds/post";
import NganuUserAPI from "./ds/user";
import NganuAlbumApi from "./ds/album";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { ContextValue } from "./types";

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await startStandaloneServer<ContextValue>(server, {
        context: async () => {
            return {
                dataSources: {
                    nganuPost: new NganuPostApi(),
                    nganuUser: new NganuUserAPI(),
                    nganuAlbum: new NganuAlbumApi(),
                },
            };
        },
        listen: {
            port: 6969,
        },
    });

    console.log(`Server running on ${url}`);
}

startServer();
