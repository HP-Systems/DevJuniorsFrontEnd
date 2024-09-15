import { Container, Grid, Grid2, Typography } from "@mui/material";
import { CardProyecto } from "./components/cardProyecto";
import { useEffect, useState } from "react";
import axiosInstance from "../../../AxiosConfig";
import NoElements from "./components/sinElementos";

export const InicioEstudiante = () => {
    const [proyectos, setProyectos] = useState([]);  // Asegúrate de que sea un array vacío inicialmente

    const fetchProyectos = async () => {
        try {
            const response = await axiosInstance.get("/proyectos");
            if(response.data){
                console.log("Proyectos obtenidos:", response.data.data);
                setProyectos(response.data.data);
                console.log("Proyectos:", proyectos);
            }
        } catch (error) {
            console.error("Error trayendo proyectos:", error);
        }
    };
    useEffect(() => {
        try{
            fetchProyectos();
        }
        catch (error) {
            console.error("Error trayendo proyectos:", error);
        }
    }, []);

    return (
        <Container sx={{ margin: "8%" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">Proyectos Disponibles</Typography>
                </Grid>
            </Grid>

            {proyectos.length > 0 ? (
        <Grid2 gridColumn={2}>
          {proyectos.map((proyecto) => {
            return (
              <CardProyecto
                key={proyecto.id}
                proyecto={proyecto}
              />
            );
          })}
        </Grid2>
      ) : (
        <NoElements />
      )}
        </Container>
    );
};
