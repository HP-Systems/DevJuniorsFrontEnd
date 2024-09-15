import { Button, Container, Grid2, Typography } from "@mui/material";
import { CardProyecto } from "./components/cardProyecto";
import NoFoundElements from "./components/noFounElements";

export const InicioNegocio = () => {
  return (
    <Container sx={{ margin: "8%" }}>
      <Grid2 gridRow={true}>
        <Grid2 xs={6}>
          <Typography variant="h4">Panel de Proyectos</Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Button type="fill">Agregar nuevo Proyecto</Button>
        </Grid2>
      </Grid2>

      {
        //
        //  <NoFoundElements/>
      }
      <Grid2 container={2}>
        <CardProyecto />
        
      </Grid2>
    </Container>
  );
};
