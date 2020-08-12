import { Document } from 'mongoose';

export interface Post extends Document {
    readonly _id:Date;
    readonly name: string;
    readonly password: string;
    readonly tags: string;
    readonly records: string;
}