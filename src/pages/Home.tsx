import React from 'react';
import { Button } from '@/components/ui/button';

interface Sale {
  id: number;
  product: string;
  quantity: number;
  price: number;
}

const initialSales: Sale[] = [
  { id: 1, product: 'Producto A', quantity: 2, price: 100 },
  { id: 2, product: 'Producto B', quantity: 1, price: 50 },
];

const Home: React.FC = () => {
  const [sales, setSales] = React.useState<Sale[]>(initialSales);

  const handleUpdate = (id: number) => {
    console.log('Actualizar venta', id);
    // Aquí podrías abrir un modal o navegar a la ruta de actualización
  };

  const handleDelete = (id: number) => {
    setSales(prev => prev.filter(sale => sale.id !== id));
  };

  const handleGenerate = () => {
    console.log('Generar nueva venta');
    // Lógica para generar una nueva venta
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ventas</h2>
        <Button onClick={handleGenerate}>Generar Venta</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Precio</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sales.map(sale => (
              <tr key={sale.id}>
                <td className="px-6 py-4 whitespace-nowrap">{sale.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.price}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleUpdate(sale.id)}>Actualizar</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(sale.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
