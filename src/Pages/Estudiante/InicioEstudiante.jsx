import { Container, Grid, Typography } from "@mui/material";
import { CardProyecto } from "./components/cardProyecto";
import { useEffect, useState } from "react";
import axiosInstance from "../../../AxiosConfig";

export const InicioEstudiante = () => {
    const [proyectos, setProyectos] = useState([]);  // Asegúrate de que sea un array vacío inicialmente

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const response = await axiosInstance.get("/proyectos");
                setProyectos(response.data || []);  // Validación de seguridad para asegurar que sea un array
            } catch (error) {
                console.error("Error trayendo proyectos:", error);
            }
        };

        fetchProyectos();
    }, []);

    return (
        <Container sx={{ margin: "8%" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">Proyectos Disponibles</Typography>
                </Grid>
            </Grid>

            {Array.isArray(proyectos) && proyectos.length === 0 ? (
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    No hay proyectos disponibles.
                </Typography>
            ) : (
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {proyectos.map  ((proyecto) => (
                        <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
                            <CardProyecto
                                nameProyect={proyecto.titulo}
                                bodyProyect={proyecto.descripcion}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};
