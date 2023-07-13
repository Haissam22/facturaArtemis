import mongoose from "mongoose";

const productoSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        proveedor:{
            type:String,
            required:true,
            trim:true
        },
        categoria:{
            type:String,
            required:true,
            trim:true
        },
        cantidad:{
            type:String,
            required:true,
            trim:true
        },
        precioUnitario:{
            type:String,
            required:true,
            trim:true
        },
        stock:{
            type:String,
            required:true,
            trim:true
        },
        pedidos:{
            type:String,
            required:true,
            trim:true
        },
        descontinuado:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);

const Productos=mongoose.model("Producto",productoSchema);

export default Productos;