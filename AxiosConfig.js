// src/axiosConfig.js
import axios from 'axios';

// Crear una instancia de Axios con configuración predeterminada
const axiosInstance = axios.create({
    baseURL: 'http://146.190.56.186/api', // Cambia esta URL por la tuya
    timeout: 10000, // Tiempo de espera de las solicitudes
    headers: {
        'Content-Type': 'application/json',
        // Puedes agregar más headers aquí si es necesario
<<<<<<< HEAD
    },
=======
    }, // Si necesitas enviar cookies con las solicitudes
>>>>>>> 332d1e723cd67761326a2ac79f1b599ec4550c94
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
    (response) => {
        return response.data; // Asegúrate de devolver solo los datos si es necesario
    },
    (error) => {
        // Manejo global de errores
        if (error.response && error.response.status === 401) {
            console.error('No autorizado');
        } else {
            console.error('Error en la solicitud:', error);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
