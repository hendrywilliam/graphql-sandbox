import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import NganuAPI from "./ds/api";
import typeDefs from "./schema";
import resolvers from "./resolvers";

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await startStandaloneServer(server, {
        context: async () => {
            return {
                dataSources: {
                    nganuPost: new NganuAPI(),
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
