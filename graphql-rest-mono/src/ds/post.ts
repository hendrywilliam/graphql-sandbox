import { RESTDataSource } from "@apollo/datasource-rest";

class NganuPostApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchPosts<Post>(): Promise<Post[]> {
        return this.get<Post[]>("posts");
    }

    async fetchPost<Post>(id: Number): Promise<Post> {
        return this.get<Post>(`posts/${id}`);
    }

    async fetchCommentsInPost<Comment>(id: Number): Promise<Comment[]> {
        return this.get<Comment[]>(`posts/${id}/comments`);
    }
}

export default NganuPostApi;
