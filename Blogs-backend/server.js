const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require('path');

connectDb();
const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = ["https://contact-list-frontend.onrender.com"];
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());
app.use("/api/blogs", require("./routes/blogsRoutes"));

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});