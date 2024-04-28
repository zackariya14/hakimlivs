


// import express from 'express';
// import {jwt, JWT_SECRET} from '../controllers/jw-token.js';

// import User from '../models/user.model.js';
// import asyncHandler from 'express-async-handler';
// import morgan from 'morgan';

// const authMiddleware = asyncHandler(
//     async (req, res, next) => {
//         let token;

//         if (req?.headers?.authorization?.startsWith('Bearer')) {
//             token = req.headers.authorization.split(' ')[1];
//             try {
//                 if (token) {
//                     const decoded = jwt.verify(token, JWT_SECRET);

//                     const user = await User.findById(decoded?.id)
//                     req.user = user;
//                     next();
//                 }
//             } 
//             catch (error) {
//                 throw new Error('Not authorized, token failed');
//             }}
             
//            else {
//             throw new Error('Not authorized, no token');
//         }
//     })


// const isAdmin = asyncHandler(
//     async (req, res, next) => {
//         const { email } = req.user;
//         const adminUser = await User.findOne({ email });
//         if (adminUser.role !== 'admin') {
//             throw new Error('You are not an admin');


//         } else { next(); }

//     })
// export {authMiddleware,isAdmin}