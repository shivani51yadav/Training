import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";

// Display All User || GET
 router.get('/display', UserController.UserDisplay);

// Create User || POST
router.post('/register', UserController.UserRegister);

// // Delete
// router.delete('/delete/:id', UserController.UserDelete);

// // 
// router.put('/update/:id', UserController.UserUpdate);

// search User
router.get('/search/:id', UserController.UserSearch);

//Login User || POST
 router.post('/login', UserController.UserLogin);


export default router;