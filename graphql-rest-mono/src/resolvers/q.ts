const q = {
    Query: {
        posts: async (_, __, { dataSources }) => {
            return await dataSources.nganuPost.fetchPosts();
        },
        post: async (_, { id }, { dataSources }) => {
            return await dataSources.nganuPost.fetchPost(id);
        },
        users: async (_, __, { dataSources }) => {
            return await dataSources.nganuUser.fetchUserList();
        },
        user: async (_, { id }, { dataSources }) => {
            return await dataSources.nganuUser.fetchUser(id);
        },
        albums: async (_, __, { dataSources }) => {
            return await dataSources.nganuAlbum.fetchAlbums();
        },
        album: async (_, { id }, { dataSources }) => {
            return await dataSources.nganuAlbum.fetchAlbum(id);
        },
    },
    Post: {
        comment: async ({ id }, __, { dataSources }) => {
            return await dataSources.nganuPost.fetchCommentsInPost(id);
        },
    },
    User: {
        posts: async ({ id }, __, { dataSources }) => {
            return await dataSources.nganuUser.fetchUserPost(id);
        },
    },
    Album: {
        photos: async ({ id }, __, { dataSources }) => {
            return await dataSources.nganuAlbum.fetchPhotosInAlbum(id);
        },
    },
};

export default q;
