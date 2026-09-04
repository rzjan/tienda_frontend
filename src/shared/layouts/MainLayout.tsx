import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar arriba */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="flex-grow p-6">
        {children}
      </main>

      {/* Footer abajo */}
      <footer className="bg-blue-600 text-white text-center py-3">
        © {new Date().getFullYear()} Mi Tienda — Todos los derechos reservados
      </footer>
    </div>
  );
}