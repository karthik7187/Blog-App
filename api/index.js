
const express= require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors =require("cors");
const authRoute = require("./routes/auth");
const postRoute= require("./routes/posts");
const catRoute = require("./routes/categories");
const userRoute = require("./routes/users");


dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,
      {   
    }).then(console.log("connected to  MongoDb"))
      .catch((err)=>console.log(err));


      app.use("/api/auth", authRoute);
      app.use("/api/post", postRoute);
      app.use("/api/cate",catRoute);
      app.use("/api/users", userRoute);

//app.use("/",(req,res)=>{
  //console.log("Hey this is main url");
//})

app.listen("5000", () =>{

    console.log("Backend is running.");
});