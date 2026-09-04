type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Agregar al carrito
      </button>
    </div>
  );
}