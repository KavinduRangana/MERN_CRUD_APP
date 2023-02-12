//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    // Read token of cookie
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Check expiration
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decode sub
    const user = await User.findById(decoded.sub);
    console.log("pass2");
    if (!user) return res.sendStatus(401);

    // attach user to req
    req.user = user;

    // Continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
