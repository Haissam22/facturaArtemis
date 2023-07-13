import Categoria from "../models/categorias.js";

const getAll = async (req,res)=>{
    const categoria = await Categoria.find();
    res.json(categoria);

};

const getOne = async (req,res)=>{
    try {
        const categoria = await Categoria.findOne({_id:req.params.id});
        res.json(categoria);
    } catch (error) {
       res.send(error.message);
    }
}
export {
    getAll,
    getOne
};