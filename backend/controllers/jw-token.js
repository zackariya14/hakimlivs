
import jwt from 'jsonwebtoken';

const JWT_SECRET = "secret";
const generateToken=(id)=>{
    return jwt.sign({id},JWT_SECRET,{expiresIn:'30d'})


}


export {generateToken, JWT_SECRET , jwt}