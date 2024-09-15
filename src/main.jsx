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
    path: '/landinnPage'
  },
  {
    path: '/register',
    element: <Register />,
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
