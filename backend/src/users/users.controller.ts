import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  BadRequestException,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    if (await this.userService.findUser(username)) {
      throw new BadRequestException('Username Already Exists!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.registerUser(username, hashedPassword);

    return user.username;
  }
  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userService.findUser(username);
    if (!user) throw new BadRequestException('invalid credentials');

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials'); //mozda inavlid pass username
    }

    const jwt = await this.jwtService.signAsync({ username: user.username });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'success',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) throw new UnauthorizedException();

      // const user = await this.userService.findUser(data['username']);

      return data['username'];
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }
}
