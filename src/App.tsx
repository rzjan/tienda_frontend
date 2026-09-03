import Navbar from "./shared/components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mt-10">
          Tailwind funcionando 🚀
        </h1>
      </main>
    </div>
  );
}