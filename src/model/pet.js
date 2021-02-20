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
    comments: [String],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})

const pet = model('Pet', petSchema);
export default pet;