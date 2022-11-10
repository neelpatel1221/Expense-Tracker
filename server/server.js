import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = 4000;


await mongoose.connect("mongodb+srv://pneel15:pneel15@mern.vyy2gnw.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDB conncection successfull");

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});