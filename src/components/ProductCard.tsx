export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="btn"
        data-item-id={product.id}
        data-item-name={product.name}
        data-item-price={product.price}
        data-item-url="/store"
        data-item-image={product.image}
      >
        Add to Cart
      </button>
    </div>
  );
}