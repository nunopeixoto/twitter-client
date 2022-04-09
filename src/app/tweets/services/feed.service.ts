import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Tweet} from '../models/tweet.model';

@Injectable()
export class FeedService {

  constructor(
    private http: HttpClient,
  ) { }

  getFeed(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(environment.apiUrl + '/api/feed');
  }

  getFollowingFeed(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(environment.apiUrl + '/api/feed?onlyFollowing=true');
  }
}
