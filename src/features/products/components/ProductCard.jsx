export default function ProductCard({ product, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </div>
  );
}
