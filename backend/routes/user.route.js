// import express from 'express';
// const router= express.Router()
// import {authMiddleware} from '../middleware/auth-middleware.js'
// import {createUser, loginUserCtrl, deletaUser, updatedUser} from '../controllers/user.controller.js'


// router.post('/register',createUser)
// router.post('/login', authMiddleware, loginUserCtrl)

// router.delete('/:id',deletaUser)
// router.put('/:id',updatedUser)
// export default router;
import express from 'express';
import Admin from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
dotenv.config();
import cors from 'cors';
const router = express.Router();


router.post('/login', async( req,res)=>{


    const {username,password,role} = req.body;
    if(role=== "admin"){
const admin= await Admin.findOne({username});
if(!admin){
 return  res.json({message:"Admin not found"});
}

const validPassword = admin.password === "adminpassword";
if(!validPassword){
    return res.json({message:"Wrong password"});

    }
    const token = jwt.sign({username:admin.username,role:"admin"},process.env.Admin_Key,{expiresIn:"1h"});
    res.cookie('token',token ,{httpOnly:true ,secure:true});
    
    return res.json({login:true,role:"admin"});
    
}
})


    
//  router.get('/logout', (req,res) => {
//     res.clearCookie('token');
//     return res.json({logout:true});
// })




export default router;