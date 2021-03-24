import { User } from './User';
import * as userData from './Users.json';

export class UserService {
  static users: any = (<any>userData).default;

  static getUsers() {
    return this.users;
  }
}
