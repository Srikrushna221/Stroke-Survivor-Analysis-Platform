import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BehaviorService } from './behavior.service';
import { BehaviorController } from './behavior.controller';
import { Behavior } from './entities/behavior.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Behavior])],
  controllers: [BehaviorController],
  providers: [BehaviorService],
})
export class BehaviorModule {}
