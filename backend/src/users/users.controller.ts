import { Controller, Post, Body, Get, Patch, Res, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.userService.registerUser(username, password);

    return user.username;
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.userService.login(response, username, password);
    return {
      message: 'success',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    await this.userService.getUsername(request);
    return null;
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }

  @Patch()
  async updateAccount(
    @Req() request: Request,
    @Body('oldpassword') oldPassword: string,
    @Body('newpassword') newPassword: string,
    @Body('newpasswordrepeat') newPasswordRepeat: string,
  ) {
    await this.userService.updateAccount(
      request,
      oldPassword,
      newPassword,
      newPasswordRepeat,
    );
    return null;
  }
}
