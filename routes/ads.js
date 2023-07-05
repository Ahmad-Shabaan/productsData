const express = require("express");
const router = express.Router();
const adsPhotos = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
];
router.get("/ads", (req, res) => {
  res.send(adsPhotos);
});

module.exports = router;
