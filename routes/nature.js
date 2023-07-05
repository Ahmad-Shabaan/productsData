const express = require("express");
const router = express.Router();
const naturalPhotos = [
  {
    _id: 1,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 2,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 3,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 4,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 5,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 6,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 7,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 8,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 9,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 10,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 11,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 12,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 13,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 14,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 15,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 16,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 17,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 18,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 18,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 20,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 21,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },

  {
    _id: 22,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 23,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 24,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 25,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 26,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 27,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 28,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 29,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
  {
    _id: 30,
    images: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
    ],
  },
];
router.get("/nature", (req, res) => {
  res.send(naturalPhotos);
});

module.exports = router;