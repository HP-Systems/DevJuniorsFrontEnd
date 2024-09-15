import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../AxiosConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';

export const LoginPage = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [msj, setMsj] = useState("");
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
        const response = await axiosInstance.post("/login", login);
        setLoading(false);
        console.log("Respuesta del login:", response.data);
        if(response.data.tipo_usuario === "1"){
          nav("/estudiante/inicio");
        }
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error("Error en el login:", error.response.data);
          setMsj(error.response.data.msg);
      }
    };
  };



  return (
    <Container
      maxWidth="max"
      sx={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <Grid
        container
        spacing={0}
      >
        {/* Imagen a la izquierda */}
        <Grid
          item
          xs={12}
          md={8}
          borderRight={45}
          sx={{
            position: "relative",
            height: "100vh",
            background:
              "url(https://img.freepik.com/premium-vector/technology-doodle-drawing-collection-hand-drawn-doodle-illustrations-cartoon-style_40453-2166.jpg?w=1060) no-repeat center center",
            backgroundSize: "cover",
            overflow: "hidden",
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
            height: "100vh",
            overflowY: "auto", // El formulario puede scrollear si excede la pantalla
            padding: 4,
          }}
        >
          <Container sx={{ margin: "30%" }}></Container>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{ fontWeight: "bold", alignSelf: "center" }}
          >
            Iniciar Sesión
          </Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={login.email}
            onChange={handleInputChange}
          />
   
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={login.password}
            onChange={handleInputChange}
          />
         

          <Button
            variant="contained"
            color="primary"
            fullWidth
                onClick={handleLogin}
          >
            Entrar
          </Button>
          <Typography color="red" variant="body" className="flex justify-center mt-6">{msj}</Typography>
          <NavLink to="/register" className="flex justify-center mt-6"><Typography variant="body" className="text-blue-500">No estoy registrado</Typography></NavLink>
        </Grid>
      </Grid>
      <CircularProgress style={{position: 'absolute', top: '50%', left: '50%', display: loading ? 'block' : 'none'}} />
    </Container>
  );
};
