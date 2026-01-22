const express = require("express");
const { SendMail } = require("../controllers/mailController");

const route = express.Router();

route.post("/send-mail", SendMail);

module.exports = route;
