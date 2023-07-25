const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); // Import the cors middleware

// Replace 'your_mongodb_connection_string' with your actual MongoDB connection string
const mongoURI = "";

const app = express();
// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Define the email schema
const emailSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
});

// Create the Email model
const Email = mongoose.model("Email", emailSchema);

// Middleware to parse incoming JSON data
app.use(express.json());

// Route to save an email
app.post("/save-email", async (req, res) => {
  try {
    const email = req.body.Email;
    const newEmail = new Email({ Email: email });
    await newEmail.save();
    res.status(201).json({ message: "Email has been saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save the email." });
  }
});

// Route to get all emails
app.get("/get-emails", async (req, res) => {
  try {
    const emails = await Email.find({}, { _id: 0, Email: 1 });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch emails." });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
