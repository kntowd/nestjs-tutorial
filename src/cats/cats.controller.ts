import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { ValidationPipe } from './customPipe/validation.pipe';
import { CreateCatDto } from './dto/create-cat-dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  // class-validator との組み合わせでスキーマを利用してvalidation処理を実装
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get('error')
  async testError(): Promise<void> {
    //　実際のレスポンス {"statusCode":403,"message":"Forbidden"}
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  // pipeを使ったpath parameterの検証
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'hoge';
  }

  @Get('/custom/:id')
  // pipeを使ったpath parameterの検証
  // query paramete等も可
  async customPipeTest(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    console.log(id);
    return 'hoge';
  }
}
