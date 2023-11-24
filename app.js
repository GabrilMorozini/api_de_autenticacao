require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_URL)

let db = mongoose.connection;

db.on("error", () => {
  console.log("Houve um erro");
});
db.once("open", () => {
  console.log("Banco de dados carregado");
});
 
app.use("/user", express.json(), userRouter);

app.use("/admin", express.json(), adminRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Servidor Rodando")
})



