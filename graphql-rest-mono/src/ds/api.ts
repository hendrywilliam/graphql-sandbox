import { RESTDataSource } from "@apollo/datasource-rest";

class NganuAPI extends RESTDataSource {
    override baseURL = "https://jsonplaceholder.typicode.com/";

    async fetchPost<Movie>(): Promise<Movie[]> {
        return this.get<Movie[]>("posts");
    }
}

export default NganuAPI;
