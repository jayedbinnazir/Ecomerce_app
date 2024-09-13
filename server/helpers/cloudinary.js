const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Config = require("../config");

cloudinary.config({
  cloud_name: Config.CLOUDE_NAME,
  api_key: Config.CLOUDE_API_KEY,
  api_secret: Config.CLOUDE_API_SECRET,
});


const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
