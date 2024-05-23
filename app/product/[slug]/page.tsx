import Header from "../../../components/shared/header/Header";
import ProductLayout from "../../product/[slug]/components/layout";
import { showOneProduct } from "../../server-actions/products/handler";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = params.id;
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
