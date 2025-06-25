# 🛒 Cart-App - Sistema de Gestión de Ventas

Una aplicación moderna de gestión de ventas construida con React, TypeScript, Vite y ShadCN/UI. Esta aplicación proporciona una interfaz intuitiva para administrar ventas, productos y actualizaciones de transacciones.

## ✨ Características

### 🏠 **Gestión de Ventas (Home)**
- **Tabla de datos interactiva** con paginación automática
- **Búsqueda en tiempo real** por producto o ID de venta
- **Filtrado por tipo de pago** (Efectivo, Tarjeta, Transferencia)
- **Acciones CRUD**: Actualizar y eliminar ventas
- **Interfaz responsiva** que se adapta a diferentes dispositivos
- **Estados visuales** con badges coloridos para tipos de pago

### 📊 **Funcionalidades Avanzadas**
- Paginación inteligente (5 elementos por página)
- Búsqueda instantánea sin recarga
- Filtros combinables (búsqueda + tipo de pago)
- Formato de moneda con separadores de miles
- Indicadores visuales de estado
- Navegación fluida entre páginas

### 🎨 **Tecnologías y Herramientas**
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **UI Framework**: ShadCN/UI + Radix UI
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State Management**: React Hooks
- **Linting**: ESLint 9

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** versión 18.0 o superior
- **npm** o **yarn** como gestor de paquetes

### 1. Clonar el repositorio
```bash
git clone https://github.com/DG-Develop/Cart-App.git
cd Cart-App
```

### 2. Instalar dependencias
```bash
npm install
# o si prefieres yarn
yarn install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
# o con yarn
yarn dev
```

La aplicación se ejecutará en `http://localhost:5173`

### 4. Otros comandos disponibles

```bash
# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
Cart-App/
├── public/                 # Archivos estáticos
│   └── vite.svg
├── src/
│   ├── assets/            # Recursos (imágenes, iconos)
│   ├── components/        # Componentes reutilizables
│   │   └── ui/           # Componentes UI de ShadCN
│   ├── lib/              # Utilidades y helpers
│   ├── pages/            # Páginas principales
│   │   ├── Home.tsx      # Gestión de ventas
│   │   ├── ProductList.tsx
│   │   └── SaleUpdate.tsx
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── components.json        # Configuración ShadCN
├── package.json
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
└── vite.config.ts         # Configuración Vite
```

## 🛠️ Configuración de Desarrollo

### ShadCN/UI Setup
El proyecto utiliza ShadCN/UI para componentes. Los componentes están preconfigurados en `src/components/ui/`.

### Tailwind CSS
Tailwind CSS está configurado con las últimas características y plugins personalizados.

### TypeScript
Configuración estricta de TypeScript para mejor desarrollo y mantenimiento del código.

### ESLint
Configuración moderna de ESLint con reglas específicas para React y TypeScript.

## 📋 Funcionalidades Detalladas

### Sistema de Ventas
- **Visualización**: Tabla moderna con datos de ventas
- **Búsqueda**: Input de búsqueda con ícono integrado
- **Filtros**: Select dropdown para tipo de pago
- **Paginación**: Sistema de navegación página por página
- **Acciones**: Botones para actualizar y eliminar ventas

### Interfaz de Usuario
- **Design System**: Componentes consistentes de ShadCN/UI
- **Responsive**: Adaptable a móviles, tablets y desktop
- **Accesibilidad**: Componentes accesibles por defecto
- **Temas**: Soporte para modo claro/oscuro (próximamente)

## 🔧 Personalización

### Agregar nuevos componentes ShadCN
```bash
npx shadcn@latest add [component-name]
```

### Modificar estilos Tailwind
Edita `tailwind.config.js` para personalizar colores, espaciado, etc.

### Agregar nuevas páginas
1. Crear archivo en `src/pages/`
2. Configurar ruta en el router principal
3. Importar componentes UI necesarios

## 📦 Dependencias Principales

### Producción
- **React 19.1.0** - Biblioteca principal
- **React Router DOM 7.6.2** - Enrutamiento
- **Tailwind CSS 4.1.10** - Framework de estilos
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Biblioteca de iconos
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Desarrollo
- **Vite 6.3.5** - Build tool y dev server
- **TypeScript 5.8.3** - Tipado estático
- **ESLint 9.29.0** - Linting de código

## 🎯 Próximas Características

- [ ] Autenticación de usuarios
- [ ] Dashboard con métricas
- [ ] Exportación de datos (PDF, Excel)
- [ ] Modo oscuro/claro
- [ ] Notificaciones push
- [ ] Integración con API backend
- [ ] Tests unitarios e integración

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación
2. Busca en issues existentes
3. Crea un nuevo issue con detalles específicos

---

**Desarrollado con ❤️ usando React + TypeScript + Vite**
