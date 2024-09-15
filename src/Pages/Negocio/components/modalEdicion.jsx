import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import axiosInstance from '../../../../AxiosConfig';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ModalEdit = ({ proyecto, modalState, handleModalState }) => {
  const { descripcion, titulo,id } = proyecto;
  const [proyectoNew, setProyecto] = useState({ titulo, descripcion});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setProyecto((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleEditProyect = () => {
    // Aquí puedes hacer algo con el proyecto editado, como guardarlo o enviarlo a una API
    console.log(proyectoNew); // Este es el objeto actualizado
    const response = axiosInstance.put(`/proyecto/status/${id}`,proyectoNew);
    console.log(response); 
    handleModalState();
  };

  return (
    <Modal open={modalState} onClose={handleModalState}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Editar Proyecto</Typography>
          <IconButton onClick={handleModalState}>
            <Close />
          </IconButton>
        </Box>

        <TextField
          id="titulo"
          fullWidth
          margin="normal"
          label="Nombre del Proyecto"
          value={proyectoNew.titulo}
          onChange={handleInputChange}
        />

        <TextField
          id="descripcion"
          fullWidth
          margin="normal"
          label="Descripción"
          multiline
          rows={4}
          value={proyectoNew.descripcion}
          onChange={handleInputChange}
        />

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleEditProyect}>
            Guardar Cambios
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleModalState}>
            Cerrar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
