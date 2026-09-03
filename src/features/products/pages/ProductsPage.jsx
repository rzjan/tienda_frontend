import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

export default function ProductsPage() {
  const { products, loading, addProduct, removeProduct } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Lista de productos</h1>
      <ProductForm onAdd={addProduct} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onDelete={removeProduct} />
        ))}
      </div>
    </div>
  );
}