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
  SelectItem,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';

interface Product {
  id: number;
  name: string;
  price: number;
}
interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: 'Producto A', price: 100 },
  { id: 2, name: 'Producto B', price: 50 },
  { id: 3, name: 'Producto C', price: 75 },
];

const ProductList: React.FC = () => {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = React.useState<string>('');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const updateQuantity = (id: number, delta: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex gap-6 p-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Productos Disponibles</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(prod => (
              <TableRow key={prod.id}>
                <TableCell>{prod.id}</TableCell>
                <TableCell>{prod.name}</TableCell>
                <TableCell>${prod.price}</TableCell>
                <TableCell>
                  <Button size="sm" onClick={() => addToCart(prod)}>
                    Agregar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-1/3 bg-gray-50 p-4 rounded-md flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Carrito</h2>
        {cart.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="icon" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button size="icon" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                    </div>
                  </TableCell>
                  <TableCell>${item.price * item.quantity}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <caption className="mt-2 text-right font-semibold">
              Total: ${cart.reduce((sum, i) => sum + i.price * i.quantity, 0)}
            </caption>
          </Table>
        ) : (
          <p className="text-center mt-4">El carrito está vacío.</p>
        )}
        <div className="mt-auto">
          <Select onValueChange={setPaymentMethod} value={paymentMethod}>
            <SelectTrigger className="w-full mb-4">
              <SelectValue placeholder="Método de Pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Seleccione medio</SelectLabel>
                <SelectItem value="efectivo">Efectivo</SelectItem>
                <SelectItem value="tarjeta">Tarjeta</SelectItem>
                <SelectItem value="transferencia">Transferencia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="default" onClick={() => console.log('Venta generada')}>
            Generar Venta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
