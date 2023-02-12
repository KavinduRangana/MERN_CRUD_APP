//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
const {
  Admin,
  validateAdminSignUp,
  validateAdminLogIn,
} = require("../models/admin");
const AdminAuth = require("../middleware/adminAuth");

router.use(express.json());

// Create Admin

router.post("/signup", async (req, res) => {
  try {
    // validate new user
    const { error } = validateAdminSignUp(req.body);
    if (error)
      return res.status(400).send({ massage: error.details[0].message });

    // Get email and password from req body
    const { email, password } = req.body;

    // check new user is exists
    const admin = await Admin.findOne({ email });
    if (admin)
      return res.status(409).send({ message: "User with given email exists" });

    // Hash password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a user with data
    await new Admin({ ...req.body, password: hashPassword }).save();
    console.log("sign");
    res.status(201).send({ success: "Admin created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Admin LogIn

router.post("/login", async (req, res) => {
  try {
    // validate user
    const { error } = validateAdminLogIn(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Get email and password from req body
    const { email, password } = req.body;

    // check user is exists
    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(401).send({ message: "Invalid Email or Password" });
    console.log({ admin });
    // Check password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Create token
    const exp = Date.now() + 1000 * 60 * 60 * 24;
    //const token = user.generateAuthToken();
    const token = jwt.sign({ sub: admin._id, exp }, process.env.TOKEN_KEY);

    // Set the cookie
    res.cookie("AdminAuthorization", token, {
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

router.get("/logout", AdminAuth, (req, res) => {
  try {
    res.clearCookie("AdminAuthorization");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Check Auth

router.get("/auth", AdminAuth, (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
