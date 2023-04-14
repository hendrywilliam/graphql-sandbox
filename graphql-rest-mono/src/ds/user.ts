import { RESTDataSource } from "@apollo/datasource-rest";

class NganuUserAPI extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    fetchUserList<User>(): Promise<User[]> {
        return this.get<User[]>("users", { signal: AbortSignal.timeout(5000) });
    }

    fetchUser<User>(id): Promise<User> {
        return this.get<User>(`users/${id}`, {
            signal: AbortSignal.timeout(5000),
        });
    }

    fetchUserPost<Post>(id): Promise<Post[]> {
        return this.get<Post[]>(`users/${id}/posts`, {
            signal: AbortSignal.timeout(5000),
        });
    }
}

export default NganuUserAPI;
