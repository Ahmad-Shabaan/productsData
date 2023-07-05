const express = require("express");
const router = express.Router();
const myTest = [
  {
    id: 100001,
    name: "Men",
    products: [
      {
        id: 1,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",

        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5616_rscshw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5615_m2llte.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5614_hcaovw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5613_h8gsej.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5612_dywjcs.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5616_rscshw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5615_m2llte.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5614_hcaovw.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515761/Jammal/MEN/Product/IMG_5613_h8gsej.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5612_dywjcs.jpg",
        ],
      },
      {
        id: 2,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5618_blseiu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515762/Jammal/MEN/Product/IMG_5618_blseiu.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515765/Jammal/MEN/Product/IMG_5617_ukxdep.jpg",
        ],
      },
      {
        id: 3,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5619_viu0ex.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515770/Jammal/MEN/Product/IMG_5620_p5tpmn.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515776/Jammal/MEN/Product/IMG_5621_k0c0mo.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515785/Jammal/MEN/Product/IMG_5623_mk5tgl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515789/Jammal/MEN/Product/IMG_5622_mznb2x.jpg",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482823/Jammal/MEN/ZZGx53DJl2hKNUlWwSJgtWomVAWJc86Mc3Wi5MIu_enudzl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515763/Jammal/MEN/Product/IMG_5619_viu0ex.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515770/Jammal/MEN/Product/IMG_5620_p5tpmn.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515776/Jammal/MEN/Product/IMG_5621_k0c0mo.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515785/Jammal/MEN/Product/IMG_5623_mk5tgl.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688515789/Jammal/MEN/Product/IMG_5622_mznb2x.jpg",
        ],
      },
      {
        id: 4,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482866/Jammal/MEN/JPkXChVDZE7na2TWXgfAVDQzijzj6w68dGvyrFVz_t5mkki.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 5,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482878/Jammal/MEN/EwO9XFJOL03PxifZHNRAnESDSP7CsltpwmVw24gg_qddwjn.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 6,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482893/Jammal/MEN/rVJ5Z4UOKavPQYmt7fSEx56kHQ54Qo0fUr8L3wZB_sulejm.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 7,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482924/Jammal/MEN/nFdoi6sPQCwaCdHkAfXGZ8zQhDPFpFpRp6j4IxQ9_ntngst.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 8,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482936/Jammal/MEN/oO334uMkLXhqGgqEuVsmYLOqcNXaPIfd78GhnOj4_kryisy.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 9,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482952/Jammal/MEN/yQje15SzkOGslbQ6dIiLmUwaov95U9zKjEmYH6AA_junrvn.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 10,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483074/Jammal/MEN/sZWMi3xU3cqTmc8Z4EhqCNPJ63aF9QH9gSTj9njp_tzit4n.png",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 11,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483081/Jammal/MEN/B4udDZzU8VAWxikPE2wDh8O8PpefRjNmlzuTb9Pv_arbg3p.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 12,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688482924/Jammal/MEN/nFdoi6sPQCwaCdHkAfXGZ8zQhDPFpFpRp6j4IxQ9_ntngst.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 13,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483097/Jammal/MEN/e6NJHfdeGypdtqXPYvoTTkFIb2nDDt7kL0zZDl1F_gy9zjx.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 14,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483111/Jammal/MEN/N4oNFKvxZYPlZhWA1JMKoohZRKWURezt0ztcZoPM_xthkng.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 15,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483124/Jammal/MEN/sRm4wGJsiu29O26UFhUMiFFwRICCcrLfZ5wcnuL6_fvkxpv.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 16,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 17,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 18,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 19,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 20,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },

  {
    id: 100002,
    name: "Women",
    products: [
      {
        id: 101,
        name: "تيشرت أوفر سايز مخطط",
        description:
          "تيشرت أوفر سايز مخطط الخامه قطن إصبن الطول ٧٥سم المقاس وان سيز ل ٨٠ك",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
          "2",
        ],
        normalImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483297/Jammal/Women/YQlA9bcdlpxi13ZLeOjbYq6HWXHuM6zbZw7qRTRe_eto815.jpg",
          "",
        ],
      },
      {
        id: 102,
        name: "جيبه zebra",
        description: "جيبه zebra  الخامه اسكوبا كريب المقاس وان سيز ل ٨٠ك",

        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483304/Jammal/Women/xvGsR3GLoRrXhNeabjME6q8Za1XWTQHu6MXkssXO_zp3vvc.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 103,
        name: "",
        description:
          "تيشرت أوفر سايز مخطط الخامه قطن إصبن الطول ٧٥سم المقاس وان سيز ل ٨٠ك",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483311/Jammal/Women/T4uku2tcdcSPlpGCqPsq43umjVakAo6GUscUFy9i_zzgxbh.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483311/Jammal/Women/T4uku2tcdcSPlpGCqPsq43umjVakAo6GUscUFy9i_zzgxbh.jpg",
          "2",
        ],
        normalImages: ["1", "2"],
      },
      {
        id: 104,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483318/Jammal/Women/7xXdfB2BynLY9PCSghen5jqazxD284qA8XY5GEfc_po9msp.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483318/Jammal/Women/7xXdfB2BynLY9PCSghen5jqazxD284qA8XY5GEfc_po9msp.jpg",
          "2",
        ],
      },
      {
        id: 105,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483325/Jammal/Women/Naz1K1igX8lCykX60kogav3ar3Iv59NnsCgZ8sdc_pkj1e1.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483325/Jammal/Women/Naz1K1igX8lCykX60kogav3ar3Iv59NnsCgZ8sdc_pkj1e1.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483469/Jammal/Women/Product/47698_zfzpdh.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483477/Jammal/Women/Product/95290_wwdlby.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483486/Jammal/Women/Product/84933_y65uh9.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483494/Jammal/Women/Product/40974_x4d4y9.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483502/Jammal/Women/Product/71017_dc6xul.jpg",
        ],
        normalImages: ["", ""],
      },
      {
        id: 106,
        name: "",
        description: "",
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483339/Jammal/Women/1lxgF4alyANAZ7V3tAgquAmrVLuehSQO43TEOSZS_xaxxy5.jpg",
        editedImages: [
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483339/Jammal/Women/1lxgF4alyANAZ7V3tAgquAmrVLuehSQO43TEOSZS_xaxxy5.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483381/Jammal/Women/Product/35809_ax5ikx.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483399/Jammal/Women/Product/83248_s9ogfa.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483389/Jammal/Women/Product/85197_r4wjjb.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483411/Jammal/Women/Product/7997_qen13k.jpg",
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483422/Jammal/Women/Product/23496_au7lsv.jpg",
        ],
        normalImages: ["", ""],
      },
    ],
  },

  {
    id: 100003,
    name: "children",
    products: [
      {
        id: 201,
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483228/Jammal/MEN/lV6D0IKpaP7wRJJ4NNowKHxZdsYAkU7bZ4PYkZUr_teepgs.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
      {
        id: 202,
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483213/Jammal/MEN/WvIIMACL1Jgr6MbjoZLVGjaxJuAT3tVKah7Tt6Kf_z3hzf6.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 203,
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483180/Jammal/MEN/Ly9jq6DwNfFlyO96TA49toDDh4YZDKAnbAPyNqlD_wqrpac.jpg",
        editedImages: ["1", "2"],
        normalImages: ["1", "2"],
      },
      {
        id: 204,
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483169/Jammal/MEN/eKJ7oQBObsyhdloRw4zdD1yNf5uaJjrBB0IVycRM_mfgu3f.jpg",
        editedImages: ["1", "2"],
      },
      {
        id: 205,
        image:
          "https://res.cloudinary.com/duc04fwdb/image/upload/v1688483151/Jammal/MEN/40If2mw36SGk7ySxxwxtenhmOLCNIqcc7OabfLqr_vslzzd.jpg",
        editedImages: ["1", "2"],
        normalImages: ["", ""],
      },
    ],
  },
];

router.get("/test", (req, res) => {
  res.send(myTest);
});

module.exports = router;
