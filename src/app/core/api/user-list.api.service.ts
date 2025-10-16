import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsersResponse } from '../models/user.model';
import { environment } from '../../../environments/environments';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListApiService {
  private http = inject(HttpClient);
  
  public getUsers(limit: number): Observable<IUsersResponse> {
    const params = new HttpParams().set('limit', String(limit));

    return this.http.get<IUsersResponse>(`${environment.apiUrl}/users`, {params})
  }
}
