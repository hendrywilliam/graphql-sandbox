const resolvers = {
    Query: {
        post: (_, __, { dataSources }) => {
            return dataSources.nganuPost.fetchPost();
        },
    },
};

export default resolvers;
