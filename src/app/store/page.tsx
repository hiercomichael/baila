import ProductCard from "../../components/ProductCard";

const products = [
  { id: "1", name: "T-shirt", price: 25, image: "/images/tshirt.jpg" },
  { id: "2", name: "Mug", price: 15, image: "/images/mug.jpg" },
];

export default function StorePage() {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
