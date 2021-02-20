import { Schema, model } from 'mongoose';

const likeSchema = new Schema({
    like: Boolean,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})

const like = model('Like', likeSchema);
export default like;