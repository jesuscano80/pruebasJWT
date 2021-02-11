import {Schema,model} from "mongoose";
import bcrypt from "bcryptjs";


const userSchema= new Schema({
    username:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles: [{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]
},
{
    timestamps:true,
    versionKey:false
    
})

userSchema.statics.encryptPassword = async (password) =>{
    //genSalt aplica el algoritmo 10 veces de encriptado
    const salt= await bcrypt.genSalt(10);
    // retorna el cifrado
     return await bcrypt.hash(password, salt);
}
userSchema.statics.comparePassword = async (password,receivedPassword) =>{
    // devuelve true o false
    return await bcrypt.compare(password,receivedPassword)
}


export default model ("User", userSchema)