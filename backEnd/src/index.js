import app from "./app.js";

/* funcion expresion */
const main = ()=>{
    app.listen(app.get("port"));
    console.log(`the Great Company's  server is running on port ${app.get("port")}`);
}
main();