import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    token: String,
    tokenExp: Number,
    bookmark: String,
},
{
    timestamps: true
})

const user = model('User', userSchema);
export default user;