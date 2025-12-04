import { Injectable } from '@nestjs/common';
import { usersDto } from './users.dto';

@Injectable()
export class UsersService {

  private users: usersDto[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 30
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25
    }
  ];

  findAll(): usersDto[] {
    return this.users;
  }

  addusers(usersDto: usersDto) {
    this.users.push({
      id: this.users.length + 1,
      name: usersDto.name,
      age: usersDto.age
    });
    return this.users;
  }
}
