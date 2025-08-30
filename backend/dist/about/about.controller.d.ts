import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    create(createAboutDto: CreateAboutDto): Promise<import("./about.schema").About>;
    findAll(): Promise<import("./about.schema").About[]>;
    findOne(id: string): Promise<import("./about.schema").About>;
    update(id: string, updateAboutDto: UpdateAboutDto): Promise<import("./about.schema").About>;
    remove(id: string): Promise<import("./about.schema").About>;
}
