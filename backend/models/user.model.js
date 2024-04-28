

import mongoose from 'mongoose';
const  adminSchema = new mongoose.Schema({
 
    email:{
        type:String,
        required:true,
        unique:true,
    },
 
    password:{
        type:String,
        required:true,
    
    },
    // role:{
    //     type: String,
    //     default: 'admin'
    // }
});



// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// // Metod för att jämföra inkommande lösenord med hashat lösenord
// userSchema.methods.isPasswordMatched = async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };





const Admin = mongoose.model('Admin', adminSchema);
export default Admin;