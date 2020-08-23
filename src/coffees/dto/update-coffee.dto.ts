import { CreateCoffeeDto } from './create-coffee.dto';
import { PartialType } from '@nestjs/mapped-types';

//* 还能继承 create那边的验证装饰器，nestjs 真心舒爽
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
