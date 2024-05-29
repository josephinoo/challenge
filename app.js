const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
const passport = require("passport");
const compression = require("compression");
const RateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const {swaggerDocs} = require('./swagger')
require("dotenv").config();

const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");

const app = express();
const DATABASE_URL = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "jelou", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
require("./config/auth")(passport);

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
app.use(limiter);

async function main() {
  await mongoose.connect(DATABASE_URL);
  console.log("Connected to MongoDB 🚀");
}
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}! 🚀`),
  swaggerDocs(app, PORT)
);
