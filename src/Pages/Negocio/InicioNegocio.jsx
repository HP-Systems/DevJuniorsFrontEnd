import { useEffect, useState } from "react";
import { Button, Container, Grid2, Typography } from "@mui/material";
import { CardProyecto } from "./components/cardProyecto";
import { ModalMakeProyect } from "./components/ModalMakeProyect";
import axiosInstance from "../../../AxiosConfig";
import NoFoundElements from "./components/noFounElements";

export const InicioNegocio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proyectos, setProyectos] = useState([{}]);

  const fethData = async () => {
    try {
      const response = await axiosInstance.get("/proyectos/empresa/1");
      if (response.data){
        console.log("Proyectos obtenidos:", response.data.data);
        setProyectos(response.data.data);
        
      }
    } catch (error) {
      console.error("Error al cargar los proyectos:", error);
    }
  }

  useEffect(() =>{
    try {
      fethData()
    } catch (error) {
      console.error("Error al cargar los proyectos:", error);
    }
  },[]);

  return (
    <Container sx={{ margin: "8%" }}>
      <Grid2 gridRow={true}>
        <Grid2 xs={6}>
          <Typography variant="h4">Panel de Proyectos</Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            type="fill"
            onClick={() => setIsModalOpen(true)}
          >
            Agregar nuevo Proyecto
          </Button>
        </Grid2>
      </Grid2>
      {proyectos.length > 0 ? (
        <Grid2 container={2}>
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
        <NoFoundElements />
      )}

      <ModalMakeProyect
        open={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
        }}
      />
    </Container>
  );
};
