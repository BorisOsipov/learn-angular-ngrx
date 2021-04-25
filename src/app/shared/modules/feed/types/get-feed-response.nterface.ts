import {ArticleInterface} from '../../../types/article.interface';

export interface GetFeedResponseNterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
