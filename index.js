import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//Applying middleware bodyparser:

app.use(bodyParser.json()); //whole application deals with JSON data
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
