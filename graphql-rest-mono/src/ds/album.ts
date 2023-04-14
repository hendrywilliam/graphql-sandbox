import { RESTDataSource } from "@apollo/datasource-rest";

class NganuAlbumApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    fetchAlbums<Album>(): Promise<Album[]> {
        return this.get<Album[]>(`albums`);
    }

    fetchAlbum<Album>(id): Promise<Album> {
        return this.get<Album>(`albums/${id}`);
    }

    fetchPhotosInAlbum<Photo>(id): Promise<Photo> {
        return this.get<Photo>(`albums/${id}/photos`);
    }
}

export default NganuAlbumApi;
