const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require('path');

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: "https://mini-blog-b7ik.onrender.com"
  }));

app.use(express.json());
app.use("/api/blogs", require("./routes/blogsRoutes"));

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });