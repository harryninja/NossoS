import { Document } from 'mongoose';

export default interface IUser extends Document {
    email: string;
    password: string;
    company: string;
    name: string;
    phone: string;
    date: Date;
    profession: string;
}
