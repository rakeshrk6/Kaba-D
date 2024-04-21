const express = require("express");
const app = express();

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path:"backend/congig/.env"
    })
}


module.exports = app;