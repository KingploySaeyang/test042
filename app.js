const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config;
// MongoDB Config
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log('Failed to connect to MongoDB:', err);
});

// Routing Config
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(PORT,() => console.log(`Server running on port ${PORT}`));
});
