import mongoose from "mongoose";
const connectDB = async ()=>{
    try {
        const connectionDB= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const url=`conectado a mongoDB en server ${connectionDB.connection.host} - puerto: ${connectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error}`);
        proccess.exit(1);
    }
}

export default connectDB;
