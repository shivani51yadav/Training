import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";



const UserDisplay=async(req,res)=>{
    try{
        const user=await UserModel.find({});
        if(user.length>0){
            res.status(200).send({
                status:true,
                count:user.length,
                message:"Get all Users Records",
                user,
            })
        } else{
            res.status(200).send({
             status:"Success",
             message:"Records not found.....", 
             UserData,  
            })
        }
    } catch(err){
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in Dispaly All Users",
            err
        })
    }
};


// User Login

const UserLogin=async(req,res)=>{
    try{
        const {userEmail, userPassword}=req.body;
        // Validation
        if(userEmail || userPassword){
        return res.status()    
        }
    }catch()
}