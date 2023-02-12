// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/admin");

module.exports = async (req, res, next) => {
  try {
    // Read token of cookie
    const token = req.cookies.AdminAuthorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decode sub
    const admin = await Admin.findById(decoded.sub);
    console.log("pass2");
    if (!admin) return res.sendStatus(401);

    // attach user to req
    req.admin = admin;

    // Continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
