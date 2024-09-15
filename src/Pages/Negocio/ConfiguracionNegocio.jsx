import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ConfiguracionNegocio = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handleRedirect = () => {
    navigate('/'); // Redirige al home
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1>Configuración del Negocio</h1>
      <p>Esta es la página de configuración del negocio.</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRedirect}
        sx={{ fontSize: '24px', padding: '20px 40px', marginTop: '30px' }}
      >
        Cerrar Sesion
      </Button>
    </div>
  );
};
