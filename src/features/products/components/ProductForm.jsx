import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convertir price a número
    onAdd({ ...form, price: Number(form.price) });
    setForm({ name: "", description: "", price: "", imageUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="URL de imagen"
        value={form.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">Agregar producto</button>
    </form>
  );
}
