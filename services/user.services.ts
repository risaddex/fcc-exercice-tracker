import User from '../models/users.model';

class UsersService {
  async create(resource: string) {
    console.log(resource)
    return User.addUser(resource);
  }

  async deleteById(id: string) {
    return User.removeUserById(id);
  }

  async list(limit: number, page: number) {
    return User.getUsers(limit, page);
  }

  async readById(id: string) {
    return User.getUserById(id);
  }

  async getUserByEmail(email: string) {
    return User.getUserByEmail(email);
  }
  async getUserByEmailWithPassword(email: string) {
    return User.getUserByEmailWithPassword(email);
  }
}

export default new UsersService();
