import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Student from "./Student";
import Organization from "./Organization";

export const LoginPage  = () => {
    const [registerType, setRegisterType] = useState("student");
    
    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.value);
    };

    return (
        <Container maxWidth="max" sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Grid container spacing={0}>
                {/* Imagen a la izquierda */}
                <Grid 
                    item 
                    xs={12} 
                    md={8} 
                    sx={{ 
                        position: 'relative',
                        height: '100vh', 
                        background: 'url(https://via.placeholder.com/600x400.png?text=Software+Development+App) no-repeat center center',
                        backgroundSize: 'cover',
                        overflow: 'hidden'
                    }}
                >
                    {/* Imagen estática en el grid */}
                </Grid>
                
                {/* Formulario de registro a la derecha */}
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    sx={{ 
                        height: '100vh', 
                        overflowY: 'auto', // El formulario puede scrollear si excede la pantalla
                        padding: 4, 
                    }}
                >
                    <FormControl component="fieldset" fullWidth>
                        <Typography variant="h4" component="h1" gutterBottom style={{ fontWeight: "bold", alignSelf:'center'}}>
                            Iniciar Sesión
                        </Typography>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}
