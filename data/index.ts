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
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-1-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1713559203897",
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-2-202405?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713559204945",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-3-202405?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713559205366",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-4-202405?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713559203998",
    ],
    title: "IPad Air",
    color: "#050A30",
    subColor: "#050A30",
    description: "Nyhet",
    price: 8495,
    slug: "produkt-1",
    sizes: ["1", "2", "3", "4", "5", "6"],
    video:
      "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
  },
  {
    id: "2",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1",
    images: [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2KzBHVVRRT3NJZzAweS9QUkhWS0tlYldnRHVRVjU3QkdNYWVENDFRVkdOcmprMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNBeXlhSmI0TDljSzRWK2doVytLREFnPT0=&traceId=1",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OEdYUFBWVGZFajdpclFpYWR4UnR1TVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVZ4eEM4Q0cwN0tXQzIvc1c2ZUN6NWg1SmdseVdkemNCYWFjKzF3OGpkUDFBPT0=&traceId=1",
    ],
    title: "IPhone",
    color: "#000000",
    subColor: "#000000",

    description: "Nyhet",
    price: 11995,
    slug: "produkt-2",
    sizes: ["1", "2", "3", "4", "5", "6"],
    video:
      "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
  },
  {
    id: "3",
    image:
      "https://www.mstore.se/thumb/32781/1160x928/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_1__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
    images: [
      "https://www.mstore.se/thumb/32782/1160x928/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_2__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
    ],
    title: "MacBook Air 13",
    color: "#000000",
    subColor: "#000000",
    description: "Air",
    price: 18495,
    slug: "produkt-3",
    sizes: ["1", "2", "3", "4", "5", "6"],
    video:
      "https://www.apple.com/105/media/ww/macbook-air/2024/abecf8fa-b944-4698-94ce-14616e166bff/anim/performance/hero/large_2x.mp4",
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
    sizes: ["1", "2", "3", "4", "5", "6"],
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
    sizes: ["1", "2", "3", "4", "5", "6"],
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
    sizes: ["1", "2", "3", "4", "5", "6"],
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
    sizes: ["1", "2", "3", "4", "5", "6"],
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
    sizes: ["1", "2", "3", "4", "5", "6"],
    video:
      "https://lv-vod.fl.freecaster.net/vod/louisvuitton/i0un7IjXl6_HD.mp4",
  },
];
