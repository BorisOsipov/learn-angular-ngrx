import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from './get-feed.action';
import {FeedService} from '../services/feed.service';
import {GetFeedResponseNterface} from '../types/get-feed-response.nterface';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed: GetFeedResponseNterface) => {
            return getFeedSuccessAction({feed});
          }
        ),
        catchError(() => {
          return of(getFeedFailureAction());
        })
      );
    })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {
  }
}
