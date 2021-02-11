import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User"
import Role from "../models/Role"

export const verifyToken = async (req,res,next)=>{
    try{
    const token= req.headers["x-access-token"];
    console.log(token);
    if(!token) return res.status(403).json({"message":"no token provided"});
// comprueba el token
    const decoded=jwt.verify(token,config.SECRET);
    console.log(decoded);
    req.userId=decoded.id;

    const user= await User.findById(decoded.id,{password:0});
    if(!user) return res.status(404).json({message:"no user found"});
    console.log(user);
    next();
    }
    catch(err){
        res.status(401).json({message:"Unauthorized"});
    }
}

export const isModerator = async (req, res, next)=>{
   const user= await User.findById(req.userId);
   const roles= await Role.find({_id: {$in: user.roles}});
   console.log(roles);
   for (let i=0;i<roles.length;i++){
       if(roles[i].name=="moderator"){
        next();
        return;
       }
       
   }
   return res.status(403).json({message:"requires moderator rol"})
}
export const isAdmin = async (req, res, next)=>{
    const user= await User.findById(req.userId);
    const roles= await Role.find({_id: {$in: user.roles}});
    console.log(roles);
    for (let i=0;i<roles.length;i++){
        if(roles[i].name=="admin"){
         next();
         return;
        }
        
    }
    return res.status(403).json({message:"requires admin rol"})
}
