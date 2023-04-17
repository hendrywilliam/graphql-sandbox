const m = {
    Mutation: {
        createPost: async (_, { post }, { dataSources }) => {
            try {
                const { title, body, userId } = post;
                const newPost = await dataSources.nganuPost.createNewPost(
                    title,
                    body,
                    userId
                );
                return {
                    code: 200,
                    success: true,
                    message: "Success add a new post bosku",
                    post: newPost,
                };
            } catch (errors) {
                return {
                    code: errors.extensions?.code,
                    success: false,
                    message: errors.extensions?.response.body,
                    post: null,
                };
            }
        },
    },
};

export default m;
