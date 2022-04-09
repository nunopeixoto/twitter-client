import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/profile/'+ id);
  }
}
