import Productos from "../models/productos.js";

const getAll = async (req,res)=>{
    const producto = await Productos.find();
    res.json(producto);
};

const getOne = async (req,res)=>{
    try {
        const producto = await Productos.findOne({_id:req.params.id});
        res.json(producto);
    } catch (error) {
       console.log(error) 
    }
}

export {
    getAll,
    getOne
};