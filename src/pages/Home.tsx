import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Sale {
  id: number
  quantity: number;
  price: number;
  paymentType: "efectivo" | "tarjeta" | "transferencia";
  date: string;
}

const initialSales: Sale[] = [
  {
    id: 1,
    quantity: 2,
    price: 100,
    paymentType: "efectivo",
    date: "2025-06-25",
  },
  {
    id: 2,
    quantity: 1,
    price: 50,
    paymentType: "tarjeta",
    date: "2025-06-25",
  },
  {
    id: 3,
    quantity: 3,
    price: 75,
    paymentType: "transferencia",
    date: "2025-06-24",
  },
  {
    id: 4,
    quantity: 1,
    price: 120,
    paymentType: "efectivo",
    date: "2025-06-24",
  },
  {
    id: 5,
    quantity: 5,
    price: 200,
    paymentType: "tarjeta",
    date: "2025-06-23",
  },
  {
    id: 6,
    quantity: 2,
    price: 80,
    paymentType: "transferencia",
    date: "2025-06-23",
  },
  {
    id: 7,
    quantity: 1,
    price: 60,
    paymentType: "efectivo",
    date: "2025-06-22",
  },
  {
    id: 8,
    quantity: 4,
    price: 160,
    paymentType: "tarjeta",
    date: "2025-06-22",
  },
  {
    id: 9,
    quantity: 2,
    price: 90,
    paymentType: "transferencia",
    date: "2025-06-21",
  },
  {
    id: 10,
    quantity: 3,
    price: 135,
    paymentType: "efectivo",
    date: "2025-06-21",
  },
  {
    id: 11,
    quantity: 1,
    price: 45,
    paymentType: "tarjeta",
    date: "2025-06-20",
  },
  {
    id: 12,
    quantity: 6,
    price: 300,
    paymentType: "transferencia",
    date: "2025-06-20",
  },
];

const Home: React.FC = () => {
  const [sales, setSales] = React.useState<Sale[]>(initialSales);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [paymentFilter, setPaymentFilter] = React.useState<string>("all");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 5;
  const route = useNavigate();

  // Filter sales based on search term and payment type
  const filteredSales = React.useMemo(() => {
    return sales.filter((sale) => {
      const matchesSearch =
        sale.id.toString().includes(searchTerm);
      const matchesPayment =
        paymentFilter === "all" || sale.paymentType === paymentFilter;
      return matchesSearch && matchesPayment;
    });
  }, [sales, searchTerm, paymentFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSales = filteredSales.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, paymentFilter]);

  const handleUpdate = (id: number) => {
    route(`/sale-update/${id}`);
  };

  const handleDelete = (id: number) => {
    setSales((prev) => prev.filter((sale) => sale.id !== id));
  };

  const handleGenerate = () => {
    route("products");
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatPaymentType = (type: string) => {
    const types = {
      efectivo: "Efectivo",
      tarjeta: "Tarjeta",
      transferencia: "Transferencia",
    };
    return types[type as keyof typeof types] || type;
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">
              Gestión de Ventas
            </CardTitle>
            <Button onClick={handleGenerate} className="ml-auto">
              Generar Venta
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar por producto o ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Tipo de pago" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los pagos</SelectItem>
                <SelectItem value="efectivo">Efectivo</SelectItem>
                <SelectItem value="tarjeta">Tarjeta</SelectItem>
                <SelectItem value="transferencia">Transferencia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabla */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">ID</TableHead>
                  {/* <TableHead>Producto</TableHead> */}
                  <TableHead className="text-center">Cantidad</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead className="text-center">Tipo de Pago</TableHead>
                  <TableHead className="text-center">Fecha</TableHead>
                  <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentSales.length > 0 ? (
                  currentSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.id}</TableCell>
                      <TableCell className="text-center">
                        {sale.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        ${sale.price.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            sale.paymentType === "efectivo"
                              ? "bg-green-100 text-green-800"
                              : sale.paymentType === "tarjeta"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {formatPaymentType(sale.paymentType)}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">{sale.date}</TableCell>
                      <TableCell>
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUpdate(sale.id)}
                          >
                            Actualizar
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(sale.id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No se encontraron ventas que coincidan con los filtros
                      aplicados.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1} a{" "}
                {Math.min(endIndex, filteredSales.length)} de{" "}
                {filteredSales.length} ventas
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium">
                    Página {currentPage} de {totalPages}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
