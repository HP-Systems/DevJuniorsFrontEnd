import { Container, Grid, Typography, CircularProgress } from "@mui/material";  
import { useEffect, useState } from "react";
import axiosInstance from "../../../AxiosConfig";
import NoElements from "./components/sinElementos";
import { CardEtapas } from "./components/CardEtapas";


export const Historial = () => {
    const [proyectos, setProyectos] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);  
    const id_estudiante = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).persona_id : "";

    const fetchProyectos = async () => {
        try {
            const response = await axiosInstance.get(`/proyectos/historial/${id_estudiante}`);
            if(response.data){
                console.log("Proyectos obtenidos:", response.data.data);
                setProyectos(response.data.data);
            }
        } catch (error) {
            console.error("Error trayendo proyectos:", error);
        } finally {
            setIsLoading(false);  
        }
    };

    useEffect(() => {
        fetchProyectos();
    }, []);

    return (
      <Container sx={{ margin: "8%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Historial</Typography>
          </Grid>
        </Grid>

        {isLoading ? (
          <CircularProgress />  
        ) : proyectos.length > 0 ? (
          <Grid container spacing={2}>
            {proyectos.map((proyecto) => {
             const {proyecto : subproyecto} = proyecto;
              console.log("Proyecto:", subproyecto);
              return (
                proyecto.proyecto && (  
                  <Grid item xs={12} sm={6} md={4} key={proyecto.proyecto.id}>
                    <CardEtapas
                      key={subproyecto.id}
                      proyecto={subproyecto[0]}
                    />
                  </Grid>
                )
              );
            })}
          </Grid>
        ) : (
          <NoElements />
        )}
      </Container>
    );
};
