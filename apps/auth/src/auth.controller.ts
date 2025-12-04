import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern({ cmd: 'login' })
  async login(user: any) {
    return this.authService.login(user);
  }

  @MessagePattern({ cmd: 'register' })
  async register(user: any) {
    return this.authService.register(user);
  }

  @MessagePattern({ cmd: 'validate_user' })
  async validateUser(data: { email: string; pass: string }) {
    return this.authService.validateUser(data.email, data.pass);
  }
}
