import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String, required: true },
        phone: { type: String, required: true },
        date: { type: Date, default: Date.now },
        profession: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);
