import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class FollowersService {

  constructor(
    private http: HttpClient,
  ) { }

  getFollowers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/api/followers');
  }
}
