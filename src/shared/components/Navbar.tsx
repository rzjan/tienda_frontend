export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Mi Tienda</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-200">Productos</a></li>
        <li><a href="#" className="hover:text-gray-200">Carrito</a></li>
        <li><a href="#" className="hover:text-gray-200">Contacto</a></li>
      </ul>
    </nav>
  );
}