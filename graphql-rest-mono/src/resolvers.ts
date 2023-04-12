const resolvers = {
    Query: {
        posts: (_, __, { dataSources }) => {
            return dataSources.nganuPost.fetchPosts();
        },
        post: (_, { id }, { dataSources }) => {
            return dataSources.nganuPost.fetchPost(id);
        },
    },
    Post: {
        comment: ({ id }, __, { dataSources }) => {
            return dataSources.nganuPost.fetchCommentsInPost(id);
        },
    },
};

export default resolvers;
