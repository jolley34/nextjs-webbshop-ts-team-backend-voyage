# DANI VUITTON

This project is a collaborative effort to create a webshop using React, TypeScript, Next.js, and the Material-UI (Mui) design system. The goal of the project was to build an e-commerce platform where users can browse products, view details, add items to their cart, and make purchases.

### Technologies Used

- <B>React:</B> A popular JavaScript library for building user interfaces.
- <B>TypeScript:</B> A typed superset of JavaScript that helps catch errors and improve code quality.
- <B>Next.js:</B> A React framework for building server-side rendered applications with built-in features like routing and API integration.
- <B>Material-UI (Mui):</B> A React UI framework that provides pre-designed components, theming, and styles for a consistent and responsive design.

### Features

- <B>Product Catalog:</B> Browse a catalog of products with details such as title, description, price, and image.
- <B>Product Details:</B> View detailed information about each product, including images, descriptions, and prices.
- <B>Add to Cart:</B> Users can add products to their shopping cart for later purchase.
- <B>Admin Dashboard:</B> An administrative interface to manage products, including adding, editing, and removing products.
- <B>Responsive Design:</B> The webshop is designed to be responsive, providing a seamless experience across devices of all sizes.

### Getting Started

To run the project locally, follow these steps:

1. Clone the repository: git clone https://github.com/your/repository.git
2. Install dependencies: <B>npm install</B>
3. Start the development server: <B>npm run dev</B>
4. Open your browser and navigate to http://localhost:3000

### Contributors

Daniela Byström ([danibystrom](https://github.com/danibystrom))
Linus Nilsson ([linusnilssson](https://github.com/linusnilssson))
Joel Erlandsson ([jolley34](https://github.com/jolley34))
Elin Vahlberg ([mypinkworld](https://github.com/mypinkworld))

# Kravspecifikation på projektet

## Funktionella krav

- [x] **Responsiv design**: Alla sidor skall vara responsiva.

- [x] **Implementation med NextJS**: Arbetet ska implementeras med NextJS.

- [x] **ER-diagram**: Skapa ett ER-diagram som ska ha visats vid idégodkännandet.

- [x] **Företagsidé**: Beskriv er företagsidé i en kort textuell presentation, detta ska ha visats vid idégodkännandet.

- [x] **Databas**: All data som programmet utnyttjar ska vara sparad i en SQL-databas (produkter, beställningar, konton, mm) med undantaget av bilder.

- [x] **Lösenordssäkerhet**: Inga lösenord får sparas i klartext i databasen.

- [x] **Produktkategorier**: Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.

- [x] **Produktlista**: Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara de produkter som tillhör en kategori.

- [x] **Kundkorg**: Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten.

- [x] **Validering i checkout**: Checkout-flödet i frontend-applikationen ska ha validering på samtliga fält.

- [x] **Validering på endpoints**: Backenden ska ha validering på samtliga endpoints (även Server Actions).

- [x] **Registrering och inloggning**: En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.

- [x] **Produktbeställning**: En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.

- [x] **Administratörsinloggning**: Man ska kunna logga in som administratör i systemet.

- [x] **Beställningshistorik**: Administratörer ska kunna se en lista på alla gjorda beställningar.

- [x] **Lagerhantering**: Administratörer ska kunna uppdatera antalet produkter i lager från admin-delen av sidan.

- [ ] **Orderhistorik**: När man är inloggad som kund ska man kunna se sina gjorda beställningar och om de är skickade eller inte.

- [x] **Produktadministration**: Administratörer ska kunna redigera, lägga till och ta bort produkter.
