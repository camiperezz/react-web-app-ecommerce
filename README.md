# Ecommerce React - Proyecto Final Coderhouse

Proyecto desarrollado como parte del curso **React JS Flex** en la plataforma [Coderhouse](https://www.coderhouse.com/uy/). Este e-commerce fue construido utilizando [React](https://react.dev/) y su ecosistema de librerías para el desarrollo de aplicaciones web interactivas y dinámicas, con conexión a una base de datos en [Cloud Firestore](https://firebase.google.com/docs/firestore).  

## 📌 Funcionalidades

- Listado de productos obtenidos desde la base de datos alojada en [Cloud Firestore](https://firebase.google.com/docs/firestore).
- Filtrado de productos por categoría.
- Visualización del detalle de cada producto.
- Agregar productos al carrito con selección de cantidad.
- Edición del carrito: modificación de cantidad y eliminación de productos.
- Vaciar carrito.
- Finalizar compra ingresando datos del usuario.
- Creación de orden de compra con un identificador único.
- Notificaciones con toasts.
- Nofificación en PDP de producto ya agregado al carrito.

  
## 🌐 Link de producción

https://react-web-app-ecommerce.vercel.app

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/) - Entorno de desarrollo
- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [React DOM](https://react.dev/) - Maneja la renderización de los componentes de React en el navegador.
- [React Router](https://reactrouter.com/) - Enrutamiento dinámico para React.
- [Firebase](https://firebase.google.com/) - Backend como servicio de base de datos.
- [SweetAlert2](https://sweetalert2.github.io/) - Notificaciones y alertas personalizadas.
- [SweetAlert2 React Content](https://github.com/sweetalert2/sweetalert2-react-content) - Integración de SweetAlert2 con React.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Sistema de notificaciones dinámicas para React.


## 📂 Estructura del proyecto

Carpetas y archivos principales

```
/react-web-app-ecommerce
│── /node_modules
│── /public
│── /src
│   │── /components   # Contiene todos los componentes y páginas del eCommerce
│   │── /context      # Contiene el contexto y provider para el carrito de compras
│   │── /firebase     # Configuración y consultas a la base de datos (getProducts, createOrder, etc.)
│   │── App.jsx       # Definición de rutas
│   │── main.jsx      # Archivo principal
│── package.json
│── vite.config.js
│── README.md
```

## ⚙️ Instalación y ejecución

Para ejecutar este proyecto en un entorno local, sigue estos pasos:

### Requisitos previos

- [Node.js](https://nodejs.org/es): Versión reciente compatible con React
- [npm](https://www.npmjs.com/): Gestor de paquetes incluido con Node.js

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/camiperezz/react-web-app-ecommerce.git
   ```

2. Acceder al directorio del proyecto:

   ```sh
   cd react-web-app-ecommerce
   ```

3. Instalar las dependencias:

   ```sh
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```sh
   npm run dev
   ```


## 👤 Autor y Créditos

- **Autor**: Camila Pérez
- **Profesor**: Luis González - Coderhouse
