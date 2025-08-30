import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About, AboutDocument } from './about.schema';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(About.name) private aboutModel: Model<AboutDocument>,
  ) {}

  async create(createAboutDto: CreateAboutDto): Promise<About> {
    const createdAbout = new this.aboutModel(createAboutDto);
    return createdAbout.save();
  }

  async findAll(): Promise<About[]> {
    return this.aboutModel.find().exec();
  }

  async findOne(id: string): Promise<About> {
    return this.aboutModel.findById(id).exec();
  }

  async update(id: string, updateAboutDto: UpdateAboutDto): Promise<About> {
    return this.aboutModel
      .findByIdAndUpdate(id, updateAboutDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<About> {
    return this.aboutModel.findByIdAndDelete(id).exec();
  }
}
