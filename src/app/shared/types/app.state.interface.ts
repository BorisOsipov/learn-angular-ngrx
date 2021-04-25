import {AuthStateInterface} from '../../auth/types/auth-state.interface';
import {FeedStateInterface} from './feed-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
