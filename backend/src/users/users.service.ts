import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request, Response } from 'express';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async registerUser(username: string, password: string): Promise<User> {
    if (await this.findUser(username)) {
      throw new BadRequestException('Username Already Exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new this.userModel({
      username: username,
      hashedPassword: hashedPassword,
    });

    return await newUser.save();
  }

  async login(response: Response, username: string, password: string) {
    const user = await this.findUser(username);
    if (!user) throw new BadRequestException('invalid credentials');

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials'); //mozda inavlid pass username
    }

    const jwt = await this.jwtService.signAsync({ username: user.username });

    response.cookie('jwt', jwt, { httpOnly: true, secure: false ,sameSite: 'none' }); //tako li se zavrsava?????
  }

  async findUser(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username }).exec();
  }

  async getUsername(request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) throw new UnauthorizedException();

      return data['username'];
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async updateAccount(
    request: Request,
    oldPassword: string,
    newPassword: string,
    newPasswordRepeat: string,
  ) {
    if (newPassword !== newPasswordRepeat)
      throw new BadRequestException("New passwords don't match");
    ////u fju vrv
    const user = await this.findUser(await this.getUsername(request));
    if (!user) throw new BadRequestException('invalid credentials');

    if (!(await bcrypt.compare(oldPassword, user.password))) {
      throw new BadRequestException('invalid credentials'); //mozda inavlid pass username
    }
    ///
    user.password = newPassword;
    await user.save();
  }
}
