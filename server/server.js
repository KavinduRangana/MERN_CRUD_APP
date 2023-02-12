//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connectDb");
const auth = require("./middleware/auth");

//Creat an express app
const app = express();

//import routes
const postRoutes = require("./routes/posts");
const userPostRoutes = require("./routes/userPosts");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admins");

//app middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//route middleware
app.use("/post", postRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/userpost", userPostRoutes);

//Connec to database
connectDB();

// const port = 8000;
// //mongodb+srv://mernCrudUser:<password>@mernapp.fvrex1o.mongodb.net/?retryWrites=true&w=majority
// const DB_URL = 'mongodb+srv://mernCrudUser:fphja32kphwQUIEm@mernapp.fvrex1o.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=>console.log('connected'))
// .catch((err)=>console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`Appis running on ${process.env.PORT}`)
);
