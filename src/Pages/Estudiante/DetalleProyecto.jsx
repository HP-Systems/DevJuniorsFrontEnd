/* eslint-disable no-unused-vars */
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Badge,
  Typography,
  Tabs,
  Tab,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import axiosInstance from "../../../AxiosConfig";
import { useParams } from "react-router-dom";



export default function DetalleProyecto() {
  const [tabValue, setTabValue] = React.useState(0);
  const [proyect, setProyect] = React.useState({});
  const [msg, setMsg] = React.useState("");
  const {id} = useParams();
  const [form, setForm] = React.useState({
    estudiante_id: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).persona_id : "",
    proyecto_id: id,
    URL_propuesta: "",
  });
  
  const fetchProyect = async () => {

    try {
      const response = await axiosInstance.get(`/proyecto/${id}`);
      if (response.data){
        console.log("Proyecto obtenido:", response);
        setProyect(response.data.data);
      }
    } catch (error) {
      console.error(error.msj)
    }
  }

  const sendPropuesta = async () => {
    try {
      const response = await axiosInstance.post(`/proyecto/seleccion`, form);
      if (response.data){
        console.log("Propuesta enviada:", response);
        alert("Propuesta enviada con éxito");
      }
    } catch (error) {
        if(error.response){
          console.error(error.response.data.msg)
          alert(error.response.data.msg)
        }
    }
  }

  React.useEffect(() => {
    fetchProyect();
  },[])

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  // Datos de ejemplo para el proyecto y las solicitudes
  const project = {
    id: 1,
    title: "Desarrollo de App Móvil",
    description:
      "Crear una aplicación móvil para gestión de tareas con funcionalidades avanzadas de colaboración y sincronización en tiempo real.",
    status: "Pendiente de Solicitud",
    startDate: "2023-06-01",
    endDate: "2023-12-31",
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    };

  return (
    <Box sx={{ p: 4,margin:'10%' }}>
      <Card sx={{ mb: 6 }}>
        <CardHeader
          title={
            <Typography variant="h4" component="h2">
              {proyect.titulo}
            </Typography>
          }
          subheader={proyect.descripcion}
        />
        <CardContent>
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="Detalles" />
            <Tab label="Enviar Propuesta" />
          </Tabs>

          {tabValue === 0 && (
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Estado:</strong> <Badge>{project.status}</Badge>
                </Typography>
                <Typography>
                  <strong>Fecha de inicio:</strong> {proyect.fecha_creacion}
                </Typography>
                <Typography>
                  <strong>Fecha de finalización:</strong> {proyect.fecha_limite}
                </Typography>
              </Grid>
            </Grid>
          )}
            {tabValue === 1 && (
                <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <Typography>
                    <strong>Estado:</strong> <Badge>{project.status}</Badge>
                    </Typography>
                    <Typography>Aqui puedes colocar el link de algún sistema de almacenamiento en la nube.</Typography>
                    <TextField
                        id="URL_propuesta"
                        label="URL de la propuesta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={form.URL_propuesta}
                        onChange={handleInputChange}
                    />
                    <Button variant="contained" onClick={sendPropuesta}><strong>Enviar Propuesta</strong></Button>
                </Grid>
                </Grid>
            )}
        </CardContent>
      </Card>

    </Box>
    
  );
}

