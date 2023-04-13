import { RESTDataSource } from "@apollo/datasource-rest";

class NganuUserAPI extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchUserList<User>(): Promise<User[]> {
        return this.get<User[]>("users", { signal: AbortSignal.timeout(5000) });
    }
}

export default NganuUserAPI;
