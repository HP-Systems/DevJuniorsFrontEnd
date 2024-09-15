import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Paper } from "@mui/material";
import { useState } from "react";
import Student from "./Student";
import Organization from "./Organization";

export default function Register() {
    const [registerType, setRegisterType] = useState("student");
    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.value);
    };

    return (
        <Container maxWidth="max">
            <Grid container spacing={4}>
                {/* Imagen a la izquierda */}
                <Grid item xs={12} md={8}>
                    <Paper
                        sx={{
                            height: '100vh',
                            background: 'url(https://via.placeholder.com/600x400.png?text=Software+Development+App) no-repeat center center',
                            backgroundSize: 'cover'
                        }}
                    >
                        {/* La imagen se ajusta al tamaño del contenedor */}
                    </Paper>
                </Grid>
                
                {/* Formulario de registro a la derecha */}
                <Grid item xs={12} md={4} sx={{marginTop:2}}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Register as:</FormLabel>
                        <RadioGroup 
                            value={registerType} 
                            onChange={handleRegisterTypeChange}
                            sx={{ flexDirection: 'row', gap: 2 }} // Disposición horizontal
                        >
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                            <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                        </RadioGroup>
                        {registerType === "student" ? (
                            <Student />
                        ) : (
                            <Organization />
                        )}
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}
