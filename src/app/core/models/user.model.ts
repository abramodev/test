export interface IUser {
  id: number;
  firstName: string;
  age: number;
  email: string;
  role: string;
}

export interface IUsersResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

export enum EUserRole {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
}
