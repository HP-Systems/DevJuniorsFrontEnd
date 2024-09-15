import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Register from './auth/Register.jsx';
import Navbar from './Pages/Negocio/components/navbar.jsx';
import { InicioNegocio } from './Pages/Negocio/InicioNegocio.jsx';
import { ProyectosNegocio } from './Pages/Negocio/ProyectosNegociol.jsx';
import { ConfiguracionNegocio } from './Pages/Negocio/ConfiguracionNegocio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>,
  },
  {
    path: '/negocio',
    element:<Navbar />,
    children: [
      { path: 'inicio', element: <InicioNegocio /> },
      { path: 'proyectos', element: <ProyectosNegocio /> },
      { path: 'configuracion', element: <ConfiguracionNegocio /> },
    ],
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
