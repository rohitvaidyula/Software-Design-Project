var express = require("express");
var router = express.Router();
var user = require("../models/UserCredController");
var bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const name = req.body.username;
    const pass = req.body.password;
    const passCheck = req.body.passwordCheck;

    if (!name || !pass || !passCheck) {
      return res.status(400).json({
        message: "All fileds must be entered!",
      });
    }

    if (name.length < 5) {
      return res.status(400).json({
        message: "Username must be at least 5 characters",
      });
    }

    if (pass.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    if (pass !== passCheck) {
      return res.status(400).json({
        message: "Passwords do not match!",
      });
    }

    const existingUser = await user.findOne({ userName: name });
    if (existingUser) {
      return res.status(400).json({
        message: "An account with this user already exists!",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    const newUser = new user({
      userName: name,
      passWord: hashedPassword,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const name = req.body.username;
    const pass = req.body.password;

    const User = await user.findOne({ userName: name });

    if (!User) {
      return res.status(400).json({
        message: "No account with this user exists",
      });
    }

    const isMatch = await bcrypt.compare(pass, User.passWord);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    return res.json({
      message: "I guess it worked?",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
