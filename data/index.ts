/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  video: string;
}

export interface CartItem extends Product {
  quantity: number;
  name: string;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-1-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1713559203897",
    name: "iPad Air",
    description: "Nyhet",
    price: 8495,

    video:
      "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4",
  },
  {
    id: "2",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1",

    name: "iPhone 15",
    description: "Nyhet",
    price: 11995,
    video:
      "https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4",
  },
  {
    id: "3",
    image:
      "https://www.mstore.se/thumb/32781/1160x928/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_1__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",

    name: "MacBook Air 13",
    description: "Air",
    price: 18495,
    video:
      "https://www.apple.com/105/media/ww/macbook-air/2024/abecf8fa-b944-4698-94ce-14616e166bff/anim/performance/hero/large_2x.mp4",
  },
  {
    id: "4",
    image:
      "https://www.mstore.se/thumb/32307/1160x928/Macbook_Pro_M3_Space_Gray_PDP_Image_Position_1__WWEN.jpg?min_w=400&min_h=320&fill=ffffff",
    name: "MacBook Pro",
    description: "Pro",
    price: 26450,
    video:
      "https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/themes/display/large_2x.mp4",
  },
];
