import { LocalDataBaseService, JsonDataBaseService, PostPrivider} from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostPrivider) {}

    async getPosts() {
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}