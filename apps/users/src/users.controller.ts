import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDto } from './users.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern({ cmd: 'get_users' })
  getusers(): usersDto[] {
    return this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'add_users' })
  addusers(usersDto: usersDto) {
    return this.usersService.addusers(usersDto);
  }
}
