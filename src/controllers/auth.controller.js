import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res)=>{
    const {username, email, password, roles}= req.body;
    
   const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    const savedUser=await newUser.save();
    // el metodo sign recibe tres parametros el campo que recibe, la contraseña y las opciones en este caso expire
    const token= jwt.sign({id: savedUser._id},config.SECRET,{expiresIn:86400})  // 24 horas en ms
    
    res.json({token});

}

export const signIn = async (req, res)=>{
res.json("signin");
    
}