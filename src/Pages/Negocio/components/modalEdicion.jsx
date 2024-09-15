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
  const { description,title } = proyecto;

  const handleInputChange = (event) => {
    // Aquí puedes manejar los cambios de los inputs
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
          fullWidth
          margin="normal"
          label="Nombre del Proyecto"
          value={title}
          onChange={handleInputChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Descripción"
          multiline
          rows={4}
          value={description}
          onChange={handleInputChange}
        />

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleModalState}>
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
