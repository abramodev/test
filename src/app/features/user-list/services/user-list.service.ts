import { inject, Injectable } from '@angular/core';
import { UserListApiService } from '../../../core/api/user-list.api.service';
import { map, Observable, tap } from 'rxjs';
import { IUser } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private readonly userListApiService = inject(UserListApiService)

  public getUserList(limit: number): Observable<IUser[]> {
    return this.userListApiService.getUsers(limit).pipe(
      map((res) => res.users)
    )
  }
}
