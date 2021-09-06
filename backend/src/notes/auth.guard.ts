import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const cookie = request.cookies['jwt'];
    if (!cookie) throw new UnauthorizedException();
    let data;
    
    try {
      data = await this.jwtService.verifyAsync(cookie);
    } catch (error) {
      throw new UnauthorizedException('JWT Expired');
    }

    if (!data) throw new UnauthorizedException();

    return true;
  }
}
