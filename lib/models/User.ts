import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  hash: string
  createdAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    hash: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

// Prevent model re-compilation in Next.js hot-reload
const UserModel: Model<IUser> =
  (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema)

export default UserModel
