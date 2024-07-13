export default function ProductDetail({ params } : {
    params: {productId : string}
}) {
  return <h1>Product {params.productId} Detail...</h1>;
}
