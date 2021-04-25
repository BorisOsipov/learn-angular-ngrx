import {GetFeedResponseNterface} from '../modules/feed/types/get-feed-response.nterface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseNterface | null;
}
