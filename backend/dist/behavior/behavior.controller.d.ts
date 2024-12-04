import { BehaviorService } from './behavior.service';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
export declare class BehaviorController {
    private readonly behaviorService;
    constructor(behaviorService: BehaviorService);
    create(createBehaviorDto: CreateBehaviorDto): Promise<import("./entities/behavior.entity").Behavior>;
    findAll(): Promise<import("./entities/behavior.entity").Behavior[]>;
    findOne(id: string): Promise<import("./entities/behavior.entity").Behavior>;
}
