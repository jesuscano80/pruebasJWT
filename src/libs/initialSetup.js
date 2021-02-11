import Role from "../models/Role"
// Crea configuracion inicial de roles para la app
export const createRoles = async ()=>{

    try{
    // este metodo es para ver si ya existen tipos de la clase Role, devulve un numero
    const count= await Role.estimatedDocumentCount();

    if (count>0) return;

    const values= await Promise.all([
        new Role({name:"user"}).save(),
        new Role({name:"moderator"}).save(),
        new Role({name:"admin"}).save()
    ])

    console.log(values);
    }
    
    catch(err){
        console.error(err);
    }
}