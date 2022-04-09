import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TweetService {

  constructor(
    private http: HttpClient,
  ) { }

  createTweet(text: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/tweets', {text: text});
  }

  createTweetClean(text: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/cleanTweets', {text: text});
  }
}
