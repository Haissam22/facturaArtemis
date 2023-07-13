import Clientes from "../models/clientes.js";

const getAll = async (req,res)=>{
    const clientes = await Clientes.find();
    res.json(clientes);

};

const getOne = async (req,res)=>{
    try {
        const clientes = await Clientes.findOne({_id:req.params.id});
        res.json(clientes);
    } catch (error) {
       console.log(error) 
    }
}
const insertClient=async (req,res)=>{
    try {
        const clientes= new Clientes(req.body);
        const newClient= await clientes.save();
        res.json(newClient);
    } catch (error) {
        res.status(404);
        res.status({error})
    }
}
const updateClient= async (req,res)=>{
    console.log(req.body);
    try {
        const cliente=await Clientes.findOne({_id:req.params.id});
        if(req.body.Compania){
            cliente.Compania=req.body.Compania;
        }
        if(req.body.Contacto){
            cliente.Contacto=req.body.Contacto;
        }
        if(req.body.Titulo){
            cliente.Titulo=req.body.Titulo;
        }
        if(req.body.Direccion){
            cliente.Direccion=req.body.Direccion;
        }
        if(req.body.Ciudad){
            cliente.Ciudad=req.body.Ciudad;
        }
        if(req.body.Regiones){
            cliente.Regiones=req.body.Regiones;
        }
        if(req.body.CodigoPostal){
            cliente.CodigoPostal=req.body.CodigoPostal;
        }
        if(req.body.Pais){
            cliente.Pais=req.body.Pais;
        }
        if(req.body.Telefono){
            cliente.Telefono=req.body.Telefono;
        }
        if(req.body.Fax){
            cliente.Fax=req.body.Fax;
        }
        await cliente.save();
        console.log(cliente)
        res.send(cliente);
    } catch (error) {
        res.status(404)
        res.send(error.message);
        console.log(req.params)
    }
}
const deletClient=async (req,res)=>{
    try {
        await Clientes.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:message});
    }
}

export {
    getAll,
    getOne,
    updateClient,
    deletClient,
    insertClient
};