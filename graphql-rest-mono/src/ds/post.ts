import { RESTDataSource } from "@apollo/datasource-rest";
import type { Post, Comment, CreatePostWithResponse } from "../types";

class NganuPostApi extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchPosts(): Promise<Post[]> {
        return await this.get<Post[]>("posts");
    }

    async fetchPost(id: Number): Promise<Post> {
        return await this.get<Post>(`posts/${id}`);
    }

    async fetchCommentsInPost(id: Number): Promise<Comment[]> {
        return this.get<Comment[]>(`posts/${id}/comments`);
    }

    async createNewPost(title, body, userId): Promise<Post> {
        return await this.post<Post>("posts", {
            body: {
                title,
                body,
                userId,
            },
        });
    }
}

export default NganuPostApi;
