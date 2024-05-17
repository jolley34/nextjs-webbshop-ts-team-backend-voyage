import { Prisma } from "@prisma/client";

const mockedData: { users: Prisma.UserCreateInput[], categories: Prisma.CategoryCreateInput[], products: Prisma.ProductCreateInput[], orders: Prisma.OrderCreateInput[] } = {
  users: [
    {
      username: "Joel",
      password: "hemligt",
      isAdmin: true,
    },
    {
      username: "Vem vet",
      password: "hemligt123",
      isAdmin: false,
    },
  ],
  categories: [
    {
      name: "MacBook",
    },
    {
      name: "iPhone",
    },
  ],
  products: [
    {
      name: "MacBook Pro 16",
      description: "Titan styled computer with POWER",
      image: "url_jpg",
      video: "video_url.mp4",
      price: 15000,
      isArchived: false,
    },
    {
      name: "iPhone 14",
      description: "Latest iPhone model",
      image: "iphone_image.jpg",
      video: "iphone_video.mp4",
      price: 12000,
      isArchived: false,
    },
  ],
  orders: [
    {
      totalPrice: 5000,
      user: { connect: { id: 2 } },
      createdAt: new Date(),
      shippingAdress: {
        create: {
          firstName: "Vem",
          lastName: "Vet",
          phoneNumber: "123456789",
          street: "123 Fejk Gatan",
          zipcode: "12345",
          city: "Tranemo",

        }
      },
      products: {
        create: {
          productId: 2,
          quantity: 2,
          subTotalPrice: 5000
        }
      }
    },
    {
      totalPrice: 5000,
      user: { connect: { id: 1 } },
      createdAt: new Date(),
      shippingAdress: {
        create: {
          firstName: "Anna",
          lastName: "Anka",
          phoneNumber: "987654321",
          street: "456 Fejk Gatan",
          zipcode: "54321",
          city: "Göteborg",
        }
      },
      products: {
        create: {
          productId: 1,
          quantity: 2,
          subTotalPrice: 5000

        }
      }
    },
  ],
};

export default mockedData;
