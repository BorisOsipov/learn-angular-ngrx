import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '../../store/get-feed.action';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '../../types/get-feed-response.interface';
import {errorSelector, feedSelector, isLoadingSelector} from '../../store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.store.dispatch(getFeedAction({url: this.apiUrl}));
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }
}
