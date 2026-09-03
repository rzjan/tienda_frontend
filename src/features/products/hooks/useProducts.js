import { useEffect, useState } from "react";
import { api } from "../../../shared/services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.products.getAll().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const addProduct = async (newProduct) => {
    const created = await api.products.create(newProduct);
    setProducts([...products, created]);
  };

  const updateProduct = async (id, updatedProduct) => {
    const updated = await api.products.update(id, updatedProduct);
    setProducts(products.map(p => p.id === id ? updated : p));
  };

  const removeProduct = async (id) => {
    await api.products.remove(id);
    setProducts(products.filter(p => p.id !== id));
  };

  return { products, loading, addProduct, updateProduct, removeProduct };
}
