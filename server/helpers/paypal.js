const paypal = require("paypal-rest-sdk");
const Config = require("../config");

paypal.configure({
  mode: Config.PAY_MODE ,
  client_id:Config.PAY_CLIENT_ID,
  client_secret: Config.PAY_SECRET_ID
});

module.exports = paypal;
