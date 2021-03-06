import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TweetService {
  constructor(
    private http: HttpClient,
  ) { }

  createTweet(text: string|null, retweetId: number|null): Observable<any> {
    let payload: any = {};

    if (text) {
      payload.text = text;
    }

    if (retweetId) {
      payload.retweeted_id = retweetId;
    }

    return this.http.post<any>(environment.apiUrl + '/api/tweets', payload);
  }

  createTweetClean(text: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/cleanTweets', {text: text});
  }

  createFakeTweet(text: string, username: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/fakeTweets', {text: text, impersonate_user_name: username});
  }
}
