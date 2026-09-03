import httpClient from "./httpClient";

export const api = {
  products: {
    getAll: () => httpClient.get("/products").then(r => r.data),
    getById: (id) => httpClient.get(`/products/${id}`).then(r => r.data),
    create: (data) => httpClient.post("/products", data).then(r => r.data),
    update: (id, data) => httpClient.put(`/products/${id}`, data).then(r => r.data),
    remove: (id) => httpClient.delete(`/products/${id}`).then(r => r.data),
  },
  cart: {
    get: () => httpClient.get("/cart").then(r => r.data),
    add: (item) => httpClient.post("/cart", item).then(r => r.data),
    remove: (id) => httpClient.delete(`/cart/${id}`).then(r => r.data),
  },
  users: {
    login: (credentials) => httpClient.post("/users/login", credentials).then(r => r.data),
    register: (data) => httpClient.post("/users/register", data).then(r => r.data),
    profile: () => httpClient.get("/users/profile").then(r => r.data),
  }
};
