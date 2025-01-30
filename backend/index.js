const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/userSchema");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Failed", err));

app.get("/", (req, res) => {
  res.send("Welcome to the Language Learning Backend!");
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password 
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
