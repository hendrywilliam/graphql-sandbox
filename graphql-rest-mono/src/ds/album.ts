import { RESTDataSource } from "@apollo/datasource-rest";
import type { Album, Photo } from "../types";

class NganuAlbumApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchAlbums(): Promise<Album[]> {
        return await this.get<Album[]>(`albums`);
    }

    async fetchAlbum(id): Promise<Album> {
        return await this.get<Album>(`albums/${id}`);
    }

    async fetchPhotosInAlbum(id): Promise<Photo> {
        return await this.get<Photo>(`albums/${id}/photos`);
    }
}

export default NganuAlbumApi;
