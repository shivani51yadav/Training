import mongoose from 'mongoose';
const FacSchema=new mongoose.Schema({
    FacName: {
        type:String,
        required:[true, "facName is required"]
    },
    FacEmail: {
        type:String,
        required:[true, "facEmail is required"]
    },
    FacPassword: {
        type:String,
        required:[true, "facPassword is required"]
    },
},{timestamps:true})

const FacModel=mongoose.model('fac',FacSchema);

export default FacModel;
