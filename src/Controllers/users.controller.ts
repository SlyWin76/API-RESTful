import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../Schemas/user';
import { UsersService } from '../Services/users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
