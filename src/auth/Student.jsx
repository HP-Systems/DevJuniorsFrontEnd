import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import FormValidator from "../FormValidator";
import ErrorLabel from "../Components/ErrorLabel";
import axiosInstance from "../../AxiosConfig";
import { Navigate } from "react-router-dom";

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
    const [errors, setErrors] = useState({});
    const [foto_credencial, setFotoCredencial] = useState(null);

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
            n_periodo: { required: true, number: true },
            foto_credencial: { required: true },
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
            n_periodo,
            periodo,
            foto_credencial,
        });
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        const formattedFechaNacimiento = fechaNacimiento.toISOString().split('T')[0];
        const userData = {
            email,
            password,
            passwordConfirmation,
            tipo_usuario: 1,
            nombre,
            apellido,
            telefono,
            fecha_nacimiento: formattedFechaNacimiento,
            universidad,
            clave_estudiante,
            periodo,
            n_periodo,
            foto_credencial: foto_credencial.name,
        };
        axiosInstance.post('/register', userData,
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(response => {
            console.log('Registro exitoso:', response.data);
            Navigate('/login');
        })
        .catch(error => {
            if (error.response) {
                // El servidor respondió con un código de error
                setErrors(error.response.data.error);
            }
        });
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
                    <ErrorLabel error={errors.email} />
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
                    <ErrorLabel error={errors.password} />
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
                    <ErrorLabel error={errors.nombre} />
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
                    <ErrorLabel error={errors.apellido} />
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
                    <ErrorLabel error={errors.telefono} />
                    <DatePicker
                        label="Fecha de Nacimiento"
                        value={fechaNacimiento}
                        onChange={(date) => setFechaNacimiento(date)}
                        sx={{ width: '100%', marginTop: 2}}
                    />
                    <ErrorLabel error={errors.fechaNacimiento} />
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
                    <ErrorLabel error={errors.universidad} />
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
                    <ErrorLabel error={errors.clave_estudiante} />
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
                    <ErrorLabel error={errors.periodo} />
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
                    <ErrorLabel error={errors.n_periodo} />
                    <input type="file" 
                        id="foto_credencial" 
                        name="Foto de Credencial" 
                        accept="image/*" 
                        onChange={(e) => setFotoCredencial(e.target.files[0])}
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
