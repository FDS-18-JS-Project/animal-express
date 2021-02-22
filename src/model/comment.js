import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    comment: String,
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})

const Comment = model('Comment', commentSchema);
export default Comment;