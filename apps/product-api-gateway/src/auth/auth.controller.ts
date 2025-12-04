import { Controller, Inject, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) { }

    @Post('login')
    login(@Body() user: any) {
        return this.authService.send({ cmd: 'login' }, user);
    }

    @Post('register')
    register(@Body() user: any) {
        return this.authService.send({ cmd: 'register' }, user);
    }
}
