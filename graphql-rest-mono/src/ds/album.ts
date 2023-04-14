import { RESTDataSource } from "@apollo/datasource-rest";

class NganuAlbumApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    fetchAlbums() {
        return this.get(`albums`);
    }

    fetchAlbum(id) {
        return this.get(`albums/${id}`);
    }

    fetchPhotosInAlbum(id) {
        return this.get(`albums/${id}/photos`);
    }
}

export default NganuAlbumApi;
