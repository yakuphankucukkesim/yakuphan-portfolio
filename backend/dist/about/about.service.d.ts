import { Model } from 'mongoose';
import { About, AboutDocument } from './about.schema';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
export declare class AboutService {
    private aboutModel;
    constructor(aboutModel: Model<AboutDocument>);
    create(createAboutDto: CreateAboutDto): Promise<About>;
    findAll(): Promise<About[]>;
    findOne(id: string): Promise<About>;
    update(id: string, updateAboutDto: UpdateAboutDto): Promise<About>;
    remove(id: string): Promise<About>;
}
