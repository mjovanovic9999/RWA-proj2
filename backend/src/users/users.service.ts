import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(username: string, password: string): Promise<User> {
    const newUser = new this.userModel({
      username: username,
      password: password,
    });
    const result = await newUser.save();
    return result;
  }

  async findUser(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }
}
