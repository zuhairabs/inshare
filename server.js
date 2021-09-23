const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'))
app.use(express.json())
// Databse Connection
const connectDB = require('./config/db');
connectDB();

// Cors
//app.use(cors)
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions));
//Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
  res.render('home');
})
app.use("/api/files", require('./routes/files'));
app.use("/files", require('./routes/show'));
app.use("/files/download", require('./routes/download'));

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
})