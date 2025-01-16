const express = require("express");
const userRouter = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
require("./config/db");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Set EJS as the view engine
app.set("view engine", "ejs");

// Parse JSON requests
app.use(express.json());

// Define Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack Server');
});

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

// Default API Route
app.use("/api", (req, res) => {
  res.send("hello");
});

// Start the server
app.listen(5001, () => console.log("Server started at http://localhost:5001"));
