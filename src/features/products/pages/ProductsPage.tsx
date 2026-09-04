import ProductCard from "../components/ProductCard";

const mockProducts = [
  { id: 1, name: "Remera", price: 2500, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Pantalón", price: 4800, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Zapatillas", price: 12000, image: "https://via.placeholder.com/150" },
];

export default function Productos() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
