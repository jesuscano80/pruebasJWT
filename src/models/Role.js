import {Schema,model} from "mongoose";

export const ROLES = ["user","moderator","admin"];
const rolSchema =new Schema ({
    name:String,
},{versionKey:false
})

export default model("Role", rolSchema);