import express from "express"
import morgan from "morgan";
import pkg from "../package.json"
import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import {createRoles} from "./libs/initialSetup"
const app= express();
createRoles();
//Middlewares
app.use(express.json());
app.use(morgan('dev'));
//asigna configuracion a una variable, en este caso al package.json
app.set("pkg",pkg);


app.get('/', (req,res)=>{
    res.json({name: app.get("pkg").name,
            author:app.get("pkg").author,
            description:app.get("pkg").description,
            version:app.get("pkg").version});
})

app.use("/api/products",productRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
export default app;