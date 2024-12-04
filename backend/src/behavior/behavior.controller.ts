import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BehaviorService } from './behavior.service';
import { CreateBehaviorDto } from './dto/create-behavior.dto';

@Controller('behaviors')
export class BehaviorController {
  constructor(private readonly behaviorService: BehaviorService) {}

  @Post()
  create(@Body() createBehaviorDto: CreateBehaviorDto) {
    return this.behaviorService.create(createBehaviorDto);
  }

  @Get()
  findAll() {
    return this.behaviorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.behaviorService.findOne(+id);
  }
}
