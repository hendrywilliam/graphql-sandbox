const resolvers = {
    Query: {
        posts: (_, __, { dataSources }) => {
            return dataSources.nganuPost.fetchPosts();
        },
        post: (_, { id }, { dataSources }) => {
            return dataSources.nganuPost.fetchPost(id);
        },
        users: (_, __, { dataSources }) => {
            return dataSources.nganuUser.fetchUserList();
        },
        user: (_, { id }, { dataSources }) => {
            return dataSources.nganuUser.fetchUser(id);
        },
        albums: (_, __, { dataSources }) => {
            return dataSources.nganuAlbum.fetchAlbums();
        },
        album: (_, { id }, { dataSources }) => {
            return dataSources.nganuAlbum.fetchAlbum(id);
        },
    },
    Post: {
        comment: ({ id }, __, { dataSources }) => {
            return dataSources.nganuPost.fetchCommentsInPost(id);
        },
    },
    User: {
        posts: ({ id }, __, { dataSources }) => {
            return dataSources.nganuUser.fetchUserPost(id);
        },
    },
    Album: {
        photos: ({ id }, __, { dataSources }) => {
            return dataSources.nganuAlbum.fetchPhotosInAlbum(id);
        },
    },
};

export default resolvers;
