import { showOneProduct } from "@/app/server-actions/products/handler";
import Header from "@/components/shared/header/Header";
import ProductLayout from "./components/layout";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const productId = params.slug;
  const product = await showOneProduct(productId);

  if (!product) {
    return <div>Produkten hittades inte</div>;
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
