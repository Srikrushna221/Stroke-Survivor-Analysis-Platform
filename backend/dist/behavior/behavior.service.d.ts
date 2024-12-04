import { Repository } from 'typeorm';
import { Behavior } from './entities/behavior.entity';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
export declare class BehaviorService {
    private readonly behaviorRepository;
    constructor(behaviorRepository: Repository<Behavior>);
    create(createBehaviorDto: CreateBehaviorDto): Promise<Behavior>;
    findAll(): Promise<Behavior[]>;
    findOne(id: number): Promise<Behavior>;
}
