import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat-dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
