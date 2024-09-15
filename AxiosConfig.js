// src/axiosConfig.js
import axios from 'axios';

// Crear una instancia de Axios con configuración predeterminada
const axiosInstance = axios.create({
    baseURL: 'http://146.190.56.186/api', // Cambia esta URL por la tuya
    timeout: 1000, // Tiempo de espera de las solicitudes
    headers: {
        'Content-Type': 'application/json',
        // Puedes agregar más headers aquí si es necesario
    },
    withCredentials: true, // Si necesitas enviar cookies con las solicitudes
});

// Configurar interceptores de solicitud/respuesta si es necesario
axiosInstance.interceptors.request.use(
    (config) => {
        // Puedes agregar token o cualquier otro valor antes de enviar la solicitud
        // config.headers.Authorization = `Bearer ${tuToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manejo global de errores
        if (error.response.status === 401) {
            // Redirigir al usuario si no está autenticado, por ejemplo
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
