import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema({ timestamps: true })
export class Skill {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, min: 0, max: 100 })
  proficiency: number;

  @Prop()
  icon: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
