const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const { MessageRouter } = require("./Routes/Routes");
const bodyParser = require("body-parser");
const { UserRoutes } = require("./Routes/userRoutes");
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);



app.use("/api/message", MessageRouter);
app.use("/api/user", UserRoutes);




const db = mongoose
  .connect(process.env.Mongo)
  .then((result) => {
    console.log("Connected To DB", result.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log("Server is listening");
});
