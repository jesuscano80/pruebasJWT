import Product from "../models/Products"
export const createProducts= async (req, res)=>{
    console.log(req.body);
    const newProduct= new Product({name:req.body.name, category:req.body.category, price: req.body.price, imgURL:req.body.imgURL});
     const ProductSave= await newProduct.save();
    res.status(201).json(ProductSave);
}

export const getProducts= async (req, res)=>{
const products=await Product.find();
res.json(products);
}

export const getProductById= async(req, res)=>{
    const product = await Product.findById(req.params.productId);
    res.json(product);
    
}

export const updateProductById= async (req, res)=>{
 const product= await Product.findByIdAndUpdate(req.params.productId, req.body,{ new:true});
 res.status(204).json(product);   
}

export const deleteProductById= async (req, res)=>{
     await Product.findByIdAndDelete(req.params.productId);
    res.status(204).json();
    
}