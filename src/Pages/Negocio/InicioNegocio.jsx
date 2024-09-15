import { Container, Grid2 } from "@mui/material"
import { CardProyecto } from "./components/cardProyecto"

export const InicioNegocio = () => {
    return (
       <Container>
        <Grid2 container={2}>
            <CardProyecto/>
         </Grid2>
       </Container>
    )
}