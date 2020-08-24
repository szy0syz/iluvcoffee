import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
