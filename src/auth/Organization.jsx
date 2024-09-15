import { Button, Grid2, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { useState } from "react";
import FormValidator from "../FormValidator";
import ErrorLabel from "../Components/ErrorLabel";
import axiosInstance from "../../AxiosConfig";
import { Navigate } from "react-router-dom";

export default function Organization() {
    const steps = ['Usuario', 'Empresa'];
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errors, setErrors] = useState({});

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
            nombre: { required: true },
            sector: { required: true },
            telefono: { required: true },
            ciudad: { required: true },
            estado: { required: true },
            descripcion: { required: true },
        });
        const errors = validator.validar({
            email,
            password,
            passwordConfirmation,
            nombre,
            sector,
            telefono,
            ciudad,
            estado,
            descripcion,
        });
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        const userData = {
            email,
            password,
            nombre,
            sector,
            telefono,
            ciudad,
            estado,
            descripcion,
            tipo_usuario: 2,
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
                    <TextField 
                        id="sector" 
                        label="Sector" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={sector} 
                        onChange={(e) => setSector(e.target.value)}
                    />
                    <ErrorLabel error={errors.sector} />
                </>
            )}
            {activeStep === 1 && (
                <>
                    <TextField 
                        id="estado" 
                        label="Estado" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={estado} 
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    <TextField 
                        id="ciudad" 
                        label="Ciudad" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={ciudad} 
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                    <ErrorLabel error={errors.ciudad} />
                    <ErrorLabel error={errors.estado} />
                    <TextField 
                        id="descripcion" 
                        label="Descripción" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <ErrorLabel error={errors.descripcion} />
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