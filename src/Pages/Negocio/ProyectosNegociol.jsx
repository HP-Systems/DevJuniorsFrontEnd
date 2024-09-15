import { Container, Grid2, Typography } from "@mui/material";
import { CardProyecto } from "./components/cardProyecto";
import { EtapasProyecto } from "./components/EtapasProyecto";

export const ProyectosNegocio = () => {
  return (
    <Container sx={{ margin:'8%' }}>
      <Grid2 xs={6}>
        <Typography variant="h4">Etapas de Proyectos Activos</Typography>
      </Grid2>
      <Grid2 container={2} sx={{ margin:'5%' }}>
        <Typography variant="h5">
          Proyecto 1
        </Typography>
        <EtapasProyecto />
        <Typography variant="h5">
          Proyecto 2
        </Typography>
        <EtapasProyecto />
      </Grid2>
    </Container>
  );
};
