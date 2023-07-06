const express = require("express");
const router = express.Router();
const adsPhotos = [
"https://res.cloudinary.com/duc04fwdb/image/upload/v1687969813/Jammal/Cover/cover_1_iyxfyl.png",
"https://res.cloudinary.com/duc04fwdb/image/upload/v1687968819/Jammal/Cover/cover_2_gtmohm.png",
"https://res.cloudinary.com/duc04fwdb/image/upload/v1688675134/Jammal/Cover/circle-discount-sale-podium_35913-2513_jwxkbm.avif",
];
router.get("/ads", (req, res) => {
  res.send(adsPhotos);
});

module.exports = router;
