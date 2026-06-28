import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  username:     { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 30 },
  email:        { type: String, required: true, unique: true, lowercase: true, trim: true },
  // IMPORTANT: do NOT set select:false — we need this field in login/delete
  passwordHash: { type: String, required: true },
  createdAt:    { type: Date, default: Date.now },
});

// Clear cached model on hot-reload in dev so schema changes apply immediately
if (mongoose.models.User) delete mongoose.models.User;

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
