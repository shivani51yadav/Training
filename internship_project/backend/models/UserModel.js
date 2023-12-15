import mongoose from 'mongoose';
const UserSchema=new mongoose.Schema({
    UserName: {
        type:String,
        required:[true, "userName is required"]
    },
    UserEmail: {
        type:String,
        required:[true, "userEmail is required"]
    },
    UserPassword: {
        type:String,
        required:[true, "userPassword is required"]
    },
},{timestamps:true})

const UserModel=mongoose.model('user',UserSchema);

export default UserModel;
