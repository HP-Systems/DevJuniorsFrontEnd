import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Avatar,
  Badge,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Tabs,
  Tab,
  Grid,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { Edit, Delete, CheckCircle, Cancel } from "@mui/icons-material"; // Íconos nativos de Material-UI
import ModalEdit from "./components/modalEdicion";
import axiosInstance from "../../../AxiosConfig";
import { useParams } from "react-router-dom";



export default function DetailProyect() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = React.useState(false);
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [tabValue, setTabValue] = React.useState(0);
  const [proyect, setProyect] = React.useState({});
  const {id} = useParams();
  
  const fetchProyect = async () => {

    try {
      const response = await axiosInstance.get(`/proyecto/${id}`);
      if (response.data){
        console.log("Proyecto obtenido:", response.data.data);
        setProyect(response.data.data);
        // setProyectos(response.data.data);
      }
    } catch (error) {
      console.error(error.msj)
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

  const applications = [
    { id: 1, studentName: "Ana García", status: "Pendiente", resumeUrl: "/placeholder.svg?height=400&width=300" },
    { id: 2, studentName: "Carlos López", status: "Aceptado", resumeUrl: "/placeholder.svg?height=400&width=300" },
    { id: 3, studentName: "María Rodríguez", status: "Pendiente", resumeUrl: "/placeholder.svg?height=400&width=300" },
  ];

  const openModal = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
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
          action={
            <Box>
              <Button variant="outlined" startIcon={<Edit />} onClick={() => setIsModalOpenEdit(true)}>
                Editar
              </Button>
              <Button variant="contained" color="error" startIcon={<Delete />} sx={{ ml: 2 }}>
                Eliminar
              </Button>
            </Box>
          }
        />
        <CardContent>
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="Detalles" />
            <Tab label="Solicitudes" />
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
            <List sx={{ maxHeight: 400, overflow: "auto" }}>
              {applications.map((application) => (
                <ListItem key={application.id} sx={{ mb: 2 }}>
                  <Card sx={{ width: "100%" }}>
                    <CardHeader
                      avatar={
                        <Avatar src="/placeholder.svg?height=40&width=40">
                          {application.studentName.split(" ").map((n) => n[0]).join("")}
                        </Avatar>
                      }
                      title={application.studentName}
                      action={
                        <Button variant="outlined" onClick={() => openModal(application)}>
                          Ver Solicitud
                        </Button>
                      }
                    />
                  </Card>
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>

      {/* Dialog para mostrar la solicitud */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Solicitud de {selectedApplication?.studentName}</DialogTitle>
        <DialogContent>
          <Box sx={{ aspectRatio: "3/4", position: "relative", mb: 4 }}>
            <iframe
              src={selectedApplication?.resumeUrl}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Cancel />}
              onClick={() => setIsModalOpen(false)}
            >
              Rechazar
            </Button>
            <Button variant="contained" startIcon={<CheckCircle />} onClick={() => setIsModalOpen(false)}>
              Aceptar
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <ModalEdit
      proyecto={proyect}
      modalState={isModalOpenEdit}
      handleModalState={() => setIsModalOpenEdit(false)}  // Función para cerrar el modal al presionar el botón "Cerrar"
      />
    </Box>
    
  );
}
