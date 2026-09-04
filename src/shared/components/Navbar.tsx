import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Mi Tienda</h1>
      <ul className="flex gap-x-6">
        <li><Link to="/productos" className="hover:text-gray-200">Productos</Link></li>
        <li><Link to="/carrito" className="hover:text-gray-200">Carrito</Link></li>
        <li><Link to="/contacto" className="hover:text-gray-200">Contacto</Link></li>
      </ul>
    </nav>
  );
}