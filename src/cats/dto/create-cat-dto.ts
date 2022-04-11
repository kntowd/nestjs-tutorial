import { IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  breed: string;
}
