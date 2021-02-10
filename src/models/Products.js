import {Schema,model} from "mongoose";


const productSchema = new Schema ({
    name:String,
    category:String,
    price:Number,
    imgURL:String
},{  // cada vez que guarda un dato va con su fecha de creacion
    timestamps:true,
    // para que no se cree el campo __v
    versionKey:false
})

export default model("Product", productSchema);