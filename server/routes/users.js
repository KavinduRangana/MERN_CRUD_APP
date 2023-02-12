//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const { User, validateSignUp, validateLogIn } = require("../models/user");
const {
  Admin,
  validateAdminSignUp,
  validateAdminLogIn,
} = require("../models/admin");

const auth = require("../middleware/auth");

router.use(express.json());

// SignUp

router.post("/signup", async (req, res) => {
  try {
    // validate new user
    const { error } = validateSignUp(req.body);
    if (error)
      return res.status(400).send({ massage: error.details[0].message });

    // Get email and password from req body
    const { email, password } = req.body;

    // check new user is exists
    const user = await User.findOne({ email });
    if (user)
      return res.status(409).send({ message: "User with given email exists" });

    // Hash password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a user with data
    await new User({ ...req.body, password: hashPassword }).save();
    console.log("sign");
    res.status(201).send({ success: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// LogIn

router.post("/login", async (req, res) => {
  try {
    // validate user
    const { error } = validateLogIn(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Get email and password from req body
    const { email, password } = req.body;

    // check user is exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Create token
    const exp = Date.now() + 1000 * 60 * 60 * 24;
    //const token = user.generateAuthToken();
    const token = jwt.sign({ sub: user._id, exp }, process.env.TOKEN_KEY);

    // Set the cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    //res.json({abc:"myname"});
    console.log(token);

    res.status(200).send({ success: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// LogOut

router.get("/logout", auth, (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Check Auth

router.get("/auth", auth, (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
