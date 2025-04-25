import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, lowercase: true, required: true},
    username: { type: String, required: true },
    email: {type: String, unique: true, required: true}
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

//User.find({})

export default User;