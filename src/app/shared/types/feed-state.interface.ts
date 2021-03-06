import {GetFeedResponseInterface} from '../modules/feed/types/get-feed-response.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
