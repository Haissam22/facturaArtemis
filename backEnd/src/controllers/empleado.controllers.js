import Empleados from "../models/empleado.js";

const getAll = async (req,res)=>{
    const empleado = await Empleados.find();
    res.json(empleado);

};

const getOne = async (req,res)=>{
    try {
        const empleado = await Empleados.findOne({_id:req.params.id});
        res.json(empleado);
    } catch (error) {
       console.log(error) 
    }
}
const insertEmp=async (req,res)=>{
    console.log("e")
    try {
        const empleado= new Empleados(req.body);
        console.log(req.body)
        const newEmp= await empleado.save();
        res.json(newEmp);
        console.log(newEmp);
    } catch (error) {
        res.status(404);
        res.status({error})
    }
}
const deletEmp=async (req,res)=>{
    try {
        await Empleados.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:message});
    }
}

const updateEmp= async (req,res)=>{
    console.log(req.body);
    try {
        const empleado=await Empleados.findOne({_id:req.params.id});
        if(req.body.Apellido){
            empleado.Apellido=req.body.Apellido;
        }
        if(req.body.Nombre){
            empleado.Nombre=req.body.Nombre;
        }
        if(req.body.Titulo){
            empleado.Titulo=req.body.Titulo;
        }
        if(req.body.TituloCortesia){
            empleado.TituloCortesia=req.body.TituloCortesia;
        }
        if(req.body.FechaNacimiento){
            empleado.FechaNacimiento=req.body.FechaNacimiento;
        }
        if(req.body.FechaContratacion){
            empleado.FechaContratacion=req.body.FechaContratacion;
        }
        if(req.body.Direccion){
            empleado.Direccion=req.body.Direccion;
        }
        if(req.body.Ciudad){
            empleado.Ciudad=req.body.Ciudad;
        }
        if(req.body.Regiones){
            empleado.Regiones=req.body.Regiones;
        }
        if(req.body.CodigoPostal){
            empleado.CodigoPostal=req.body.CodigoPostal;
        }
        if(req.body.Pais){
            empleado.Pais=req.body.Pais;
        }
        if(req.body.Telefono){
            empleado.Telefono=req.body.Telefono;
        }
        if(req.body.Extension){
            empleado.Extension=req.body.Extension;
        }
        if(req.body.Foto){
            empleado.Foto=req.body.Foto;
        }
        if(req.body.Notas){
            empleado.Notas=req.body.Notas;
        }
        if(req.body.Jefe){
            empleado.Jefe=req.body.Jefe;
        }
        await empleado.save();
        console.log(empleado)
        res.send(empleado);
    } catch (error) {
        res.status(404)
        res.send(error.message);
        console.log(req.params)
    }
}

export {
    getAll,
    getOne,
    insertEmp,
    deletEmp,
    updateEmp
};