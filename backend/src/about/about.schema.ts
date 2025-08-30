import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema({ timestamps: true })
export class About {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  avatar: string;

  @Prop()
  email: string;

  @Prop()
  location: string;

  @Prop()
  resumeUrl: string;

  @Prop([String])
  socialLinks: string[];
}

export const AboutSchema = SchemaFactory.createForClass(About);
