
import {generateToken } from './jw-token.js';
import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await User.findOne({ email: email });



        if (!findUser) {
         
            const newUser = await User.create(req.body);
            res.json(newUser)


        } else {


            throw new Error('User already exists')

        }


    }
)


const loginUserCtrl = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email})
       
        if (findUser && (await findUser.isPasswordMatched(password))) {

            res.json({
                _id: findUser?._id,
                 email: findUser?.email,
                 token: generateToken(findUser?._id)

            })
        }
        else {
            throw new Error('Invalid email or password')
        }
    }
)


//get all users

const getAllUser = asyncHandler(
    async (req, res) => {
        try {
            const getUsers = await User.find();
            res.json({
                getUsers,
            });
        } catch (error) {
            throw new Error(error);
        }
    }
)



//get single user
const getSingleUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const getaUser = await User.findById(id)
            res.json({
                getaUser,
            });

        }
        catch (error) {
            throw new Error(error)
        }
    }
)

//delete a user
const deletaUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const deletaUser = await User.findByIdAndDelete(id)
            res.json({
                deletaUser,
            });
          

        }
        catch (error) {
            throw new Error(error)
        }
    }
)

//update a user
const updatedUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(id,
                {
                email:req?.body?.email,
                 password:req?.body?.password
            },{new:true}
        )
        res.json({
            updatedUser,
        });
        }
        catch (error) {
            throw new Error(error)
        }}
)
export { createUser, loginUserCtrl, getAllUser, getSingleUser, deletaUser, updatedUser }