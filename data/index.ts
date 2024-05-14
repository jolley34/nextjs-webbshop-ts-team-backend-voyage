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
    title: "iPad Air",
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
    title: "iPhone 15",
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
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m3-midnight-gallery5-202402?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1707262730525",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m3-midnight-gallery6-202402?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1707769481400",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m3-gallery7-202402?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1707262733796",
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
      "https://www.mstore.se/thumb/32307/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_1__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
    images: [
      "https://www.mstore.se/thumb/32308/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_2__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
      "https://www.mstore.se/thumb/32309/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_3__WWEN.jpg?min_w=400&min_h=320&fill=ffffffhttps://www.mstore.se/thumb/32309/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_3__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
    ],
    title: "MacBook Pro",
    color: "#d5e5fc",
    subColor: "#d5e5fc",
    description: "Pro",
    price: 26450,
    slug: "produkt-4",
    sizes: ["1", "2", "3", "4", "5", "6"],
    video:
      "https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/themes/display/large_2x.mp4",
  },
];
