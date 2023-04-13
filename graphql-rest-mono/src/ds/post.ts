import { RESTDataSource } from "@apollo/datasource-rest";

class NganuPostApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchPosts<Movie>(): Promise<Movie[]> {
        return this.get<Movie[]>("posts");
    }

    async fetchPost<Movie>(id: Number): Promise<Movie> {
        return this.get<Movie>(`posts/${id}`);
    }

    async fetchCommentsInPost<Comment>(id: Number): Promise<Comment[]> {
        return this.get<Comment[]>(`posts/${id}/comments`);
    }
}

export default NganuPostApi;
