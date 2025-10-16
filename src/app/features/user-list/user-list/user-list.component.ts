import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { UserListService } from '../services/user-list.service';
import { CardComponent } from '../../../shared/card/card.component';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '../../../core/models/user.model';
import { UserEditModalComponent } from '../modals/user-edit-modal/user-edit-modal.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-list',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  private readonly userListService = inject(UserListService);
  private readonly dialog = inject(MatDialog);
  private readonly usersData = toSignal(this.userListService.getUserList(15), {
    initialValue: [],
  });
  public users = signal<IUser[]>([]);

  constructor() {
    effect(() => {
      this.users.set(this.usersData());
    });
  }

  openEdit(user: IUser) {
    this.dialog
      .open(UserEditModalComponent, {
        data: user,
        width: '520px',
        autoFocus: 'first-tabbable',
      })
      .afterClosed()
      .subscribe((updatedUser: IUser) => {
        this.users.update((users) =>
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
      });
  }
}
