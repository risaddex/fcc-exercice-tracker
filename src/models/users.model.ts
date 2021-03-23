import debug from 'debug'
import { NativeError } from 'mongoose'
import mongooseService from '../services/mongooseService'
import { IExercise, ILogParams, IUser, IExerciseResponse } from './types'
const log: debug.IDebugger = debug('app:user-model')

class User {
  Schema = mongooseService.getMongoose().Schema

  userSchema = new this.Schema({
    username: {
      unique: true,
      required: true,
      type: String,
    },
    exercises: {
      type: [
        {
          description: String,
          duration: Number,
          date: String,
        },
      ],
    },
  })

  User = mongooseService.getMongoose().model('Users', this.userSchema)

  constructor() {
    log('Created new instance of User')
  }

  async addUser(username: string): Promise<IUser> {
    return new Promise((resolve, reject) => {
      const user: IUser = new this.User({ username })
      user.save((err, user) => {
        if (err) {
          reject(err)
        }
        resolve(user)
      })
    })
  }

  async getUsers() {
    return this.User.find().select({ _id: 1, username: 1 }).exec()
  }

  async addExercise({ userId, ...exercise }: IExercise): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.User.findByIdAndUpdate(
        userId,
        {
          // @ts-ignore
          $push: {
            exercises: exercise,
          },
        },
        { new: true },
        (err: NativeError, user: IUser) => {
          if (err) {
            log(err)
            reject(err)
          } else {
            log(user)
            resolve(user)
          }
        }
      )
    })
  }

  async getLogsById(reqParams: ILogParams): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.User.findById(
        reqParams.userId,
        (error: NativeError, user: IUser) => {
          if (error) {
            log(error)
            reject(error)
          } else {
            log(user)
            resolve(user)
          }
        }
      )
    })
  }
}

export default new User()
