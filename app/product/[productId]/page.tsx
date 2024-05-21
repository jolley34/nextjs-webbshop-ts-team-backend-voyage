import { showOneProduct } from "@/app/server-actions/products/handler";
import Header from "@/components/shared/header/Header";
import ProductLayout from "./components/layout";

export default async function ProductPage({ id }) {
  const { product } = await showOneProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header name="ananas" />
      <ProductLayout
        productId={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        video={product.video}
      />
    </>
  );
}
