import { Document } from 'mongoose';
export type AboutDocument = About & Document;
export declare class About {
    name: string;
    title: string;
    description: string;
    avatar: string;
    email: string;
    location: string;
    resumeUrl: string;
    socialLinks: string[];
}
export declare const AboutSchema: import("mongoose").Schema<About, import("mongoose").Model<About, any, any, any, Document<unknown, any, About, any, {}> & About & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, About, Document<unknown, {}, import("mongoose").FlatRecord<About>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<About> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
