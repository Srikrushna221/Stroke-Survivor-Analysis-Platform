import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Behavior } from './entities/behavior.entity';
import { CreateBehaviorDto } from './dto/create-behavior.dto';

@Injectable()
export class BehaviorService {
  constructor(
    @InjectRepository(Behavior)
    private readonly behaviorRepository: Repository<Behavior>,
  ) {}

  create(createBehaviorDto: CreateBehaviorDto): Promise<Behavior> {
    const behavior = this.behaviorRepository.create(createBehaviorDto);
    return this.behaviorRepository.save(behavior);
  }

  findAll(): Promise<Behavior[]> {
    console.log(this.behaviorRepository.find());
    return this.behaviorRepository.find();
  }

  findOne(id: number): Promise<Behavior> {
    return this.behaviorRepository.findOneBy({ id });
  }
}
