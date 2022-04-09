import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class FollowService {

  constructor(
    private http: HttpClient,
  ) { }

  follow(user: User): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/follow', {user_id: user.id});
  }

  unfollow(user: User): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/unfollow', {user_id: user.id});
  }
}
