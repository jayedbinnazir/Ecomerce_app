const Config = require("../config");
const axios = require("axios");

async function verifyEmail(email) {
  const apiKey = "YOUR_ZEROBOUNCE_API_KEY"; // Replace with your actual API key
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${Config.VERIFY_EMAIL_API}&email=${email}`
    );
    return response.data; // Returns a result with validity status
  } catch (error) {
    console.error("Error verifying email:", error);
    return null; // In case of an API error, you can handle it as needed
  }
}

module.exports = {
  verifyEmail,
};
