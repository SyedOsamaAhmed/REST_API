import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT=5000;

//Applying middleware bodyparser:

app.use(bodyParser.json()); //whole application deals with JSON data

app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`));