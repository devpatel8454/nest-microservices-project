import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { UsersService } from 'apps/users/src/users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(@Inject('USERS_SERVICE') private readonly usersService: ClientProxy) { }

    @Get()
    getusers() {
        return this.usersService.send({ cmd: 'get_users' }, {});
    }

    @Post()
    addusers(@Body() user: any) {
        return this.usersService.send({ cmd: 'add_users' }, user);
    }
}
