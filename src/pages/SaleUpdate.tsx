import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';

interface SaleItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const initialSaleItems: SaleItem[] = [
  { id: 1, name: 'Producto A', quantity: 2, price: 100 },
  { id: 2, name: 'Producto B', quantity: 1, price: 50 },
];

const SaleUpdate: React.FC = () => {
  const [items, setItems] = React.useState<SaleItem[]>(initialSaleItems);
  const [paymentMethod, setPaymentMethod] = React.useState<string>('');

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const handleSave = () => {
    console.log('Venta actualizada', { items, paymentMethod });
    // Lógica para guardar los cambios de la venta
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Actualizar Venta</h2>
      <div className="overflow-x-auto mb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Precio Unitario</TableHead>
              <TableHead>Subtotal</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="icon" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                    <span>{item.quantity}</span>
                    <Button size="icon" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                  </div>
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm" onClick={() => removeItem(item.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <caption className="mt-2 text-right font-semibold">Total: ${total}</caption>
        </Table>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Select onValueChange={setPaymentMethod} value={paymentMethod}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Método de Pago" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Medio de Pago</SelectLabel>
              <SelectItem value="efectivo">Efectivo</SelectItem>
              <SelectItem value="tarjeta">Tarjeta</SelectItem>
              <SelectItem value="transferencia">Transferencia</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="font-semibold">Total: ${total}</span>
      </div>
      <Button onClick={handleSave}>Guardar Cambios</Button>
    </div>
  );
};

export default SaleUpdate;
