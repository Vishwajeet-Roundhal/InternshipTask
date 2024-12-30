require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./utils/db")
const contactRoutes = require("./Routes/Contact")
const adminRoutes = require("./Routes/Admin")
const p = process.env.PORT 
const cors = require('cors');

const frontendUrl = process.env.FRONTEND_URL;

app.use(cors({
  origin: '*', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

app.get("/", (req,res) => {
  res.json("hello");
})


connectDB().then(() => {
    try {
      app.listen(p, () => {
        console.log(`Server is running on http://localhost:${p}`);
      });
    } catch (error) {
      console.log(error, "database error");
    }
  });
  