require("dotenv").config;
const port = 5000;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const emailRouter = require("./routes/email");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/email", emailRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
