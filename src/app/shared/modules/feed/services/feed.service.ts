import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GetFeedResponseNterface} from '../types/get-feed-response.nterface';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<GetFeedResponseNterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponseNterface>(fullUrl);
  }
}
