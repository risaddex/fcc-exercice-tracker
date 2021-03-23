import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  _id?:Types.ObjectId
  userId?: string;
  username?: string;
  exercises?: IExercise[];
}

export type IExerciseParams =  {
  userId: string;
  description: String;
  duration: number;
  date: string,
}

export type IExercise = {
  userId?: string;
  description: String;
  duration: Number;
  date: string
}

export interface IExerciseResponse {
  error: boolean;
  status: number;
  log?: string;
  exercises: IExercise[]
}

export type ILogParams = {
  userId: string;
  from: Date;
  to: Date;
  limit: number
}
