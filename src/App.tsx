import { Routes, Route } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import Home from "./shared/pages/Home";
import Productos from "./shared/pages/Productos";
import Carrito from "./shared/pages/Carrito";
import Contacto from "./shared/pages/Contacto";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </MainLayout>
  );
}