import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";


// Test API
router.get('/test',(req,res)=>{
    res.status(200).json({
        status:"true",
        message:"Testing API"
    })
})

// Display All User || GET
 router.get('/display', UserController.UserDisplay);

// Create User || POST
router.post('/register', UserController.UserRegister);

//Login User || POST
 router.post('/login', UserController.UserLogin);


export default router;