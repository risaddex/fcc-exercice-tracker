import User from '../models/users.model';
import debug from 'debug';
import { IExercise, ILogParams } from '../models/types';

const log: debug.IDebugger = debug('app:user-service');

class UsersService {
  constructor() {
    log('requested by user-services')
  }

  async create(resource: string) {
    return User.addUser(resource);
  }

  async list() {
    return User.getUsers();
  }

  async createExercise(exercise: IExercise) {
    return User.addExercise(exercise)
  }
  
  async getUserLogsById(queryParams: ILogParams) {
    return User.getLogsById(queryParams)
  }
}

export default new UsersService();
