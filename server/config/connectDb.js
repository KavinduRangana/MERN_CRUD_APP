//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connectDb() {
  await mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDb;
