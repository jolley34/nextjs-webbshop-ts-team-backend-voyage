const mockedData = {
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
      createdAt: new Date(),
      firstName: "Vem",
      lastName: "Vet",
      phoneNumber: "123456789",
      address: "123 Fejk Gatan",
      zipcode: "12345",
      city: "Tranemo",
      email: "joel@tranemo.com",
    },
    {
      createdAt: new Date(),
      firstName: "Anna",
      lastName: "Anka",
      phoneNumber: "987654321",
      address: "456 Fejk Gatan",
      zipcode: "54321",
      city: "Göteborg",
      email: "anna@gothenburg.com",
    },
  ],
};

export default mockedData;
