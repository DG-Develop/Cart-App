import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import SaleUpdate from './pages/SaleUpdate';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-100 p-4 flex gap-4">
        <Link to="/" className="text-blue-500 hover:underline">Inicio</Link>
        <Link to="/products" className="text-blue-500 hover:underline">Listado Productos</Link>
        <Link to="/sale-update" className="text-blue-500 hover:underline">Actualización Venta</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/sale-update" element={<SaleUpdate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
