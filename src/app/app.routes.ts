import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/user-list/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
  },
];
