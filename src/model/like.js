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

const Like = model('Like', likeSchema);
export default Like;