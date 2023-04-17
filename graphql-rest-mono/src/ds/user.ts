import { RESTDataSource } from "@apollo/datasource-rest";
import type { User, Post } from "../types";

class NganuUserAPI extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchUserList(): Promise<User[]> {
        return await this.get<User[]>("users", {
            signal: AbortSignal.timeout(5000),
        });
    }

    async fetchUser(id): Promise<User> {
        return await this.get<User>(`users/${id}`, {
            signal: AbortSignal.timeout(5000),
        });
    }

    async fetchUserPost(id): Promise<Post[]> {
        return await this.get<Post[]>(`users/${id}/posts`, {
            signal: AbortSignal.timeout(5000),
        });
    }
}

export default NganuUserAPI;
