const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 minutes
  max: 100,
});
app.use(limiter);
app.set("trust proxy", 1);
//if the user spams with the requests, it's gonna kick him for 10 minutes

// set static folder
app.use(express.static("public"));

// routes
app.use("/api", require("./routes"));

//cors
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
