import mongoose from "mongoose";

const clientesSchema=mongoose.Schema(
    {
        Compania:{
            type:String,
            required:true,
            trim:true
        },
        Contacto:{
            type:String,
            required:true,
            trim:true
        },
        Titulo:{
            type:String,
            required:true,
            trim:true
        },
        Direccion:{
            type:String,
            required:true,
            trim:true
        },
        Ciudad:{
            type:String,
            required:true,
            trim:true
        },
        Regiones:{
            type:String,
            required:true,
            trim:true
        },
        CodigoPostal:{
            type:String,
            required:true,
            trim:true
        },
        Pais:{
            type:String,
            required:true,
            trim:true
        },
        Telefono:{
            type:String,
            required:true,
            trim:true
        },
        Fax:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);
const Clientes = mongoose.model("clientes",clientesSchema);

export default Clientes;