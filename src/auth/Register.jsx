import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Student from "./Student";
import Organization from "./Organization";
import { NavLink } from "react-router-dom";

export default function Register() {
    const [registerType, setRegisterType] = useState("student");
    
    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.value);
    };

    return (
        <Container maxWidth="max" className="bg-red-950" sx={{ display: 'flex', height: '100vh', overflow: 'hidden'}}>
            <Grid container spacing={0}>
                {/* Imagen a la izquierda */}
                <Grid 
                    item 
                    xs={12} 
                    md={8} 
                    sx={{ 
                        position: 'relative',
                        height: '100vh', 
                        background: 'url(https://img.freepik.com/premium-vector/technology-doodle-drawing-collection-hand-drawn-doodle-illustrations-cartoon-style_40453-2166.jpg?w=1060) no-repeat center center',
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
                    className="bg-slate-200"
                >
                    <Typography variant="h3" fontWeight={'bold'} gutterBottom>Registro</Typography>
                    <FormControl  component="fieldset" fullWidth>
                        <FormLabel component="legend">Registrarse como:</FormLabel>
                        <RadioGroup 
                            value={registerType} 
                            onChange={handleRegisterTypeChange}
                            sx={{ flexDirection: 'row', gap: 2 }} // Disposición horizontal
                        >
                            <FormControlLabel value="student" control={<Radio />} label="Estudiante" />
                            <FormControlLabel value="organization" control={<Radio />} label="Empresa" />
                        </RadioGroup>
                        {/* El formulario que cambia dinámicamente */}
                        {registerType === "student" ? (
                            <Student />
                        ) : (
                            <Organization />
                        )}
                        <NavLink className="flex justify-center mt-6"><Typography variant="body" className="text-blue-500">Ya estoy registrado</Typography></NavLink>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}
