import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import FormValidator from "../FormValidator";

export default function Student() {
    const steps = ['Usuario', 'Estudiante'];
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [universidad, setUniversidad] = useState('');
    const [clave_estudiante, setClaveEstudiante] = useState('');
    const [periodo , setPeriodo] = useState('');
    const [n_periodo, setNPeriodo] = useState('');
    const [foto_credencial, setFotoCredencial] = useState('');

    const handleNext = () => {

        if (activeStep === steps.length - 1) {
            handleSubmit();
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        const validator = new FormValidator({
            email: { required: true, email: true },
            password: { required: true, min: 6 },
            passwordConfirmation: { required: true, min: 6 },
            nombre: { required: true, name: true },
            apellido: { required: true, name: true },
            telefono: { required: true, number: true },
            fechaNacimiento: { required: true, date: true },
            universidad: { required: true },
            clave_estudiante: { required: true },
            periodo: { required: true },
        });
        const errors = validator.validar({
            email,
            password,
            passwordConfirmation,
            nombre,
            apellido,
            telefono,
            fechaNacimiento,
            universidad,
            clave_estudiante,
            periodo,
        });
        if (Object.keys(errors).length > 0) {
            console.log(errors);
            return;
        }
        const userData = {
            email,
            password,
            passwordConfirmation,
            tipo_usuario: 1,
            nombre,
            apellido,
            telefono,
            fecha_nacimiento: fechaNacimiento,
            universidad,
            clave_estudiante,
            periodo,
            n_periodo,
            foto_credencial
        };
    };

    const periodos = [
        'Trimestral',
        'Semestral',
        'Cuatrimestral',
    ]
    return (
        <>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 && (
                <>
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        id="password" 
                        label="Password" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField 
                        id="passwordConfirmation" 
                        label="Confirmar Contraseña" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="password"
                        value={passwordConfirmation} 
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                                        <TextField 
                        id="nombre" 
                        label="Nombre" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField 
                        id="apellido" 
                        label="Apellido" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="text"
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </>
            )}
            {activeStep === 1 && (
                <>
                    <TextField 
                        id="telefono" 
                        label="Telefono (Celular)" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="text"
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <DatePicker
                        label="Fecha de Nacimiento"
                        value={fechaNacimiento}
                        onChange={(date) => setFechaNacimiento(date)}
                    />
                    <TextField 
                        id="universidad" 
                        label="Universidad" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="text"
                        value={universidad} 
                        onChange={(e) => setUniversidad(e.target.value)}
                    />
                    <TextField 
                        id="clave_estudiante" 
                        label="Clave de Estudiante" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="text"
                        value={clave_estudiante} 
                        onChange={(e) => setClaveEstudiante(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Periodo</InputLabel>
                        <Select
                            value={periodo}
                            onChange={(e) => setPeriodo(e.target.value)}
                        >
                            {periodos.map((periodo) => (
                                <MenuItem key={periodo} value={periodo}>
                                    {periodo}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField 
                        id="n_periodo" 
                        label="Número de Periodo" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="text"
                        value={n_periodo} 
                        onChange={(e) => setNPeriodo(e.target.value)}
                    />
                    <TextField 
                        id="foto_credencial" 
                        label="Foto de Credencial" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        type="file"
                        value={foto_credencial} 
                        onChange={(e) => setFotoCredencial(e.target.value)}
                    />
                </>
            )}
            <Grid2 container spacing={2} justifyContent="flex-end">
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Atrás
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
            </Grid2>
        </>
    );
}
