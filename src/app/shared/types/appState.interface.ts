import { ArticleStateInterface } from "../../article/types/articleState.interface";
import { AuthStateInterface } from "../../auth/types/authState.interface";
import { CreateArticleStateInterface } from "../../createArticle/types/createArticleState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";
import { PopularTagsStateInterface } from "../modules/popularTags/types/popularStateTagsState.interface";

export interface AppStateInterface {
    auth: AuthStateInterface;
    feed: FeedStateInterface;
    popularTags: PopularTagsStateInterface;
    article: ArticleStateInterface;
    createArticle: CreateArticleStateInterface
}