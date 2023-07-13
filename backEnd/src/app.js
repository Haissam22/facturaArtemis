/* agregar en package.json despues de descripcion "type": "module" para poder usar import*/
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import productosRouter from "./routes/productos.routes.js";


const app=express();

app.use(express.json());

dotenv.config();
const corsOption={
    methods: ["GET","POST","PATCH","DELETE"],
}
app.use(cors(corsOption));

app.use("/categoria", categoriasRouter);
app.use("/cliente",clientesRouter);
app.use("/empleado",empleadoRouter);
app.use("/producto",productosRouter);

const PORT=process.env.PORT;

app.set("port", PORT);

connectDB();

export default app;

