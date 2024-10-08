import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Register from './auth/Register.jsx';
import Navbar from './Pages/Negocio/components/navbar.jsx';
import { InicioNegocio } from './Pages/Negocio/InicioNegocio.jsx';
import { ProyectosNegocio } from './Pages/Negocio/ProyectosNegociol.jsx';
import { ConfiguracionNegocio } from './Pages/Negocio/ConfiguracionNegocio.jsx';
import DetailProyect from './Pages/Negocio/DetalleProyecto.jsx';
import { LoginPage } from './auth/Login.jsx';
import NavbarE from './Pages/Estudiante/components/navbarE.jsx';
import { InicioEstudiante } from './Pages/Estudiante/InicioEstudiante.jsx';
import DetalleProyecto  from './Pages/Estudiante/DetalleProyecto.jsx';
import { Historial } from './Pages/Estudiante/Historial.jsx';
import { EtapasPropuesta } from './Pages/Estudiante/components/EtapasPropuesta.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      
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
      { path : `detalleProyecto/:id`, element: <DetailProyect/>}

    ],
  },
  {
    path: '/estudiante',
    element: < NavbarE/>,
    children: [
      { path: 'inicio', element: <InicioEstudiante /> },
      { path: 'detalleProyecto/:id', element: <DetalleProyecto /> },
      { path: 'historial', element: <Historial /> },
      { path: 'etapas-propuesta/:id', element: <EtapasPropuesta/> },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  }, 
  {
    path: '/login',
    element: < LoginPage />,
    // element: <Login />, // Esto se debe reemplazar por la implementación de login
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </LocalizationProvider>
  </StrictMode>,
)
