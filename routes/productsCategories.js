const express = require("express");
const router = express.Router();

const productData = [
  {
    _id: 1,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
  },
  {
    _id: 2,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
  },
  {
    _id: 3,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
  },
  {
    _id: 4,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
  },
  {
    _id: 5,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
  },
  {
    _id: 6,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483124/Jammal/MEN/sRm4wGJsiu29O26UFhUMiFFwRICCcrLfZ5wcnuL6_fvkxpv.jpg",
  },
  {
    _id: 7,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483111/Jammal/MEN/N4oNFKvxZYPlZhWA1JMKoohZRKWURezt0ztcZoPM_xthkng.jpg",
  },
  {
    _id: 8,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483097/Jammal/MEN/e6NJHfdeGypdtqXPYvoTTkFIb2nDDt7kL0zZDl1F_gy9zjx.jpg",
  },
  {
    _id: 9,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483089/Jammal/MEN/D5gsM1JQY9MtakMYL9ZP7BH2HqF9DctxCnMnIR64_nkemml.jpg",
  },
  {
    _id: 10,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483081/Jammal/MEN/B4udDZzU8VAWxikPE2wDh8O8PpefRjNmlzuTb9Pv_arbg3p.jpg",
  },
  {
    _id: 11,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483074/Jammal/MEN/sZWMi3xU3cqTmc8Z4EhqCNPJ63aF9QH9gSTj9njp_tzit4n.png",
  },
  {
    _id: 12,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482952/Jammal/MEN/yQje15SzkOGslbQ6dIiLmUwaov95U9zKjEmYH6AA_junrvn.jpg",
  },
  {
    _id: 13,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482936/Jammal/MEN/oO334uMkLXhqGgqEuVsmYLOqcNXaPIfd78GhnOj4_kryisy.jpg",
  },
  {
    _id: 14,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482924/Jammal/MEN/nFdoi6sPQCwaCdHkAfXGZ8zQhDPFpFpRp6j4IxQ9_ntngst.jpg",
  },
  {
    _id: 15,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482893/Jammal/MEN/rVJ5Z4UOKavPQYmt7fSEx56kHQ54Qo0fUr8L3wZB_sulejm.jpg",
  },
  {
    _id: 16,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482878/Jammal/MEN/EwO9XFJOL03PxifZHNRAnESDSP7CsltpwmVw24gg_qddwjn.jpg",
  },
  {
    _id: 17,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
  },
  {
    _id: 18,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
  },
  {
    _id: 19,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687360803/Jammal/MEN/30145_zxjq16.jpg",
  },
  {
    _id: 20,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1687353959/Jammal/MEN/87942_q5bzaz.jpg",
  },
  {
    _id: 21,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511581/Jammal/MEN/IMG_5580_x8815n.jpg",
  },

  {
    _id: 22,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511583/Jammal/MEN/IMG_5583_fxnv0w.jpg",
  },
  {
    _id: 23,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511582/Jammal/MEN/IMG_5584_oswirq.jpg",
  },
  {
    _id: 24,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511585/Jammal/MEN/IMG_5585_be8ui6.jpg",
  },
  {
    _id: 25,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511587/Jammal/MEN/IMG_5588_tko4ju.jpg",
  },
  {
    _id: 26,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511586/Jammal/MEN/IMG_5582_vhl0wz.jpg",
  },
  {
    _id: 27,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511587/Jammal/MEN/IMG_5589_bsspeb.jpg",
  },
  {
    _id: 28,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511588/Jammal/MEN/IMG_5590_msx3wi.jpg",
  },
  {
    _id: 29,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511588/Jammal/MEN/IMG_5581_eo3irr.jpg",
  },
  {
    _id: 30,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511589/Jammal/MEN/IMG_5591_evhqt8.jpg",
  },
  {
    _id: 31,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511590/Jammal/MEN/IMG_5587_tdcogo.jpg",
  },
  {
    _id: 32,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511589/Jammal/MEN/IMG_5591_evhqt8.jpg",
  },
  {
    _id: 33,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511593/Jammal/MEN/IMG_5592_lxc1rm.jpg",
  },
  {
    _id: 34,
    image:
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511594/Jammal/MEN/IMG_5594_leiizy.jpg",
  },
  {
    _id: 35,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511595/Jammal/MEN/IMG_5596_mablh8.jpg",
  },
  {
    _id: 36,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511594/Jammal/MEN/IMG_5593_f2899x.jpg",
  },
  {
    _id: 37,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511596/Jammal/MEN/IMG_5598_fneynq.jpg",
  },
  {
    _id: 38,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511600/Jammal/MEN/IMG_5600_xv3lkr.jpg",
  },
  {
    _id: 39,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511602/Jammal/MEN/IMG_5597_ja8lv8.jpg",
  },
  {
    _id: 40,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511604/Jammal/MEN/IMG_5601_pydnn0.jpg",
  },
  {
    _id: 41,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511606/Jammal/MEN/IMG_5586_d6ke9v.jpg",
  },
  {
    _id: 42,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511608/Jammal/MEN/IMG_5607_uxwxrh.jpg",
  },
  {
    _id: 43,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511608/Jammal/MEN/IMG_5606_rlqb5n.jpg",
  },
  {
    _id: 44,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511608/Jammal/MEN/IMG_5602_nkrqt2.jpg",
  },
  {
    _id: 45,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511610/Jammal/MEN/IMG_5605_uvrjr9.jpg",
  },
  {
    _id: 46,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511610/Jammal/MEN/IMG_5609_tvewpl.jpg",
  },
  {
    _id: 47,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511611/Jammal/MEN/IMG_5610_tu6f1p.jpg",
  },
  {
    _id: 48,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511612/Jammal/MEN/IMG_5608_iyom6o.jpg",
  },
  {
    _id: 49,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511612/Jammal/MEN/IMG_5604_lt47l4.jpg",
  },
  {
    _id: 50,
    image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1688511611/Jammal/MEN/IMG_5599_bsl7vc.jpg",
  },
];

router.get("/productsCategories", (req, res) => {
  res.send(productData);
});

module.exports = router;
