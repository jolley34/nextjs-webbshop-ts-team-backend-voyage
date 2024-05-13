/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  slug: string;
  color: string;
  subColor: string;
  video: string;
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1",
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-pont-neuf-jacket-ready-to-wear--HRFJ8WDLG60D_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wool-cigarette-pants-ready-to-wear--HRFP8WDLG60D_PM1_Worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-pont-neuf-jacket-ready-to-wear--HRFJ8WDLG60D_PM1_Side%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-pont-neuf-jacket-ready-to-wear--HRFJ8WDLG60D_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wool-cigarette-pants-ready-to-wear--HRFP8WDLG60D_PM1_Ambiance%20view.png?wid=1440&hei=1440",
    ],
    title: "Wool Pont Neuf Jacket",
    color: "#050A30",
    subColor: "#050A30",
    description: "From The Runaway",
    price: 45200,
    slug: "produkt-1",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/R80wOPlgxp_HD.mp4",
  },
  {
    id: "2",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-leather-signature-overshirt-ready-to-wear--HQL74WTV8900_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-leather-signature-overshirt-ready-to-wear--HQL74WTV8900_PM1_Worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-leather-signature-overshirt-ready-to-wear--HQL74WTV8900_PM1_Cropped%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-leather-signature-overshirt-ready-to-wear--HQL74WTV8900_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-leather-signature-overshirt-ready-to-wear--HQL74WTV8900_PM1_Ambiance%20view.png?wid=1440&hei=1440",
    ],
    title: "Leather Signature Overshirt",
    color: "#000000",
    subColor: "#000000",

    description: "From The Runaway",
    price: 57200,
    slug: "produkt-2",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/SwcDehgriF_HD.mp4",
  },
  {
    id: "3",
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-h30-travel--M24388_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-h30-travel--M24388_PM1_Worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-h30-travel--M24388_PM1_Side%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-h30-travel--M24388_PM1_Back%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-h30-travel--M24388_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
    ],
    title: "Keepall Bandoulière 50",
    color: "#000000",
    subColor: "#000000",
    description: "New Formal",
    price: 95500,
    slug: "produkt-3",
    sizes: [],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/w1Xu2uV2cW_HD.mp4",
  },
  {
    id: "4",
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-long-sleeved-cotton-shirt-ready-to-wear--HRS8PWFRS60E_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-long-sleeved-cotton-shirt-ready-to-wear--HRS8PWFRS60E_PM1_Worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-long-sleeved-cotton-shirt-ready-to-wear--HRS8PWFRS60E_PM1_Closeup%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-long-sleeved-cotton-shirt-ready-to-wear--HRS8PWFRS60E_PM1_Back%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-long-sleeved-cotton-shirt-ready-to-wear--HRS8PWFRS60E_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
    ],
    title: "Long-Sleeved Cotton Shirt",
    color: "#d5e5fc",
    subColor: "#d5e5fc",
    description: "New Formal",
    price: 25000,
    slug: "produkt-4",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/uvv6uSuwoE_HD.mp4",
  },
  {
    id: "5",
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-tuxedo-jacket-ready-to-wear--HQFJ1WZC6900_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-tuxedo-jacket-ready-to-wear--HQFJ1WZC6900_PM1_Worn%20view.png?wid=4096&hei=4096",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-tuxedo-jacket-ready-to-wear--HQFJ1WZC6900_PM1_Closeup%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-tuxedo-jacket-ready-to-wear--HQFJ1WZC6900_PM1_Side%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-single-breasted-wool-tuxedo-jacket-ready-to-wear--HQFJ1WZC6900_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
    ],
    title: "Single-Breasted Wool Tuxedo Jacket",
    color: "#000000",
    subColor: "#000000",
    description: "New York GALA",
    price: 67800,
    slug: "produkt-5",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/8Xrc1e7iAn_HD.mp4",
  },
  {
    id: "6",
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-georges-tote-mm-h30-bags--M23153_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-georges-tote-mm-h30-bags--M23153_PM1_Worn%20view.png?wid=4096&hei=4096",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-georges-tote-mm-h30-bags--M23153_PM1_Side%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-georges-tote-mm-h30-bags--M23153_PM1_Back%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-georges-tote-mm-h30-bags--M23153_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
    ],
    title: "Georges Tote",
    color: "#000000",
    subColor: "#000000",
    description: "New Formal",
    price: 135000,
    slug: "produkt-6",
    sizes: [],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/r0Gdlw7f7M_HD.mp4",
  },
  {
    id: "7",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-open-collar-short-sleeved-cotton-shirt-ready-to-wear--HQS95WIKE900_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-open-collar-short-sleeved-cotton-shirt-ready-to-wear--HQS95WIKE900_PM1_Worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-open-collar-short-sleeved-cotton-shirt-ready-to-wear--HQS95WIKE900_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-open-collar-short-sleeved-cotton-shirt-ready-to-wear--HQS95WIKE900_PM1_Ambiance%20view.png?wid=1440&hei=1440",
    ],
    title: "Short-Sleeved Cotton Shirt",
    color: "#000000",
    subColor: "#f5d751",
    description: "Venice Dreams",
    price: 13500,
    slug: "produkt-7",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/RvNMi3yNZZ_HD.mp4",
  },
  {
    id: "8",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chess-messenger-damier-other-for-men--N40562_PM2_Front%20view.png?wid=1440&hei=1440",
    images: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chess-messenger-damier-other-for-men--N40562_PM1_Worn%20view.png?wid=4096&hei=4096",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chess-messenger-damier-other-for-men--N40562_PM1_Side%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chess-messenger-damier-other-for-men--N40562_PM1_Cropped%20worn%20view.png?wid=1440&hei=1440",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chess-messenger-damier-other-for-men--N40562_PM1_Interior2%20view.png?wid=1440&hei=1440",
    ],
    title: "Chess Messenger",
    color: "#694232",
    subColor: "#fec032",
    description: "Venice Dreams",
    price: 42000,
    slug: "produkt-8",
    sizes: [],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/i0un7IjXl6_HD.mp4",
  },
];
