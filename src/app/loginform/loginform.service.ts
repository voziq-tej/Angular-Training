import { UserService } from '../User.Service';

export class LoginFormService {
  validateUser(receivedUser: any) {
    // Often used validate function, can be considered a service function

    const users = UserService.getUsers();
    for (let user of users) {
      if (
        user.email === receivedUser.email &&
        user.password === receivedUser.password
      ) {
        return user;
      }
    }
  }
}
