import express from "express"
import morgan from "morgan";
import pkg from "../package.json"
import productRoutes from "./routes/products.routes";
const app= express();

//Middlewares

app.use(morgan('dev'));
//asigna configuracion a una variable, en este caso al package.json
app.set("pkg",pkg);


app.get('/', (req,res)=>{
    res.json({name: app.get("pkg").name,
            author:app.get("pkg").author,
            description:app.get("pkg").description,
            version:app.get("pkg").version});
})

app.use("/products",productRoutes);
export default app;