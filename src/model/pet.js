import { Schema, model } from 'mongoose';

const petSchema = new Schema({
    name: String,
    deathDate: Date,
    favorites: [String],
    image: String,
    like: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})

const Pet = model('Pet', petSchema);
export default Pet;