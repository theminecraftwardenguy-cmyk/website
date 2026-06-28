import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPost extends Document {
  authorId: mongoose.Types.ObjectId;
  authorName: string;
  content: string;
  category: string;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>({
  authorId:   { type: Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  content:    { type: String, required: true, minlength: 1, maxlength: 2000 },
  category:   { type: String, enum: ['general', 'recipe', 'review', 'news'], default: 'general' },
  createdAt:  { type: Date, default: Date.now },
});

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
export default Post;
