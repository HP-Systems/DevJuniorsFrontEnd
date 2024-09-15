import { useState } from "react";
import axiosInstance from "../../../../AxiosConfig";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";

export const ModalMakeProyect = ({ open, handleClose }) => {
  const [proyecto, setProyecto] = useState({
    titulo: "",
    descripcion: "",
    fecha_limite: "",
    empresa_id: 1
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProyecto((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCreateProyect = async () => {
    try {
      const response = await axiosInstance.post("/proyecto/create", proyecto);
      console.log("Respuesta de la creación del proyecto:", response.data);
      handleClose();
    } catch (error) {
      if (error.response) {
        console.error("Error en la creación del proyecto:", error.response.data.error);
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Crear un nuevo proyecto</DialogTitle>
      <DialogContent>
        <TextField
          id="titulo"
          label="Nombre del proyecto"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="descripcion"
          label="Descripción del proyecto"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <Typography variant="body1">Fecha límite</Typography>
        <TextField
        id="fecha_limite"
  
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleCreateProyect}>Crear proyecto</Button>
      </DialogActions>
    </Dialog>
  );
}