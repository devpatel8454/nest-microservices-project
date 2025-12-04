import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('USERS_SERVICE') private usersService: ClientProxy,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await lastValueFrom(
      this.usersService.send({ cmd: 'find_user_by_email' }, email),
    );

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: any) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const newUser = { ...userDto, password: hashedPassword };

    return this.usersService.send({ cmd: 'add_users' }, newUser);
  }
}
