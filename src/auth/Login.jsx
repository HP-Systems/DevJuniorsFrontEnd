import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../AxiosConfig";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/login", login);
      console.log("Respuesta del login:", response.data);
      if(response.data.tipo_usuario === "1"){
        console.log("Usuario es un estudiante");
        nav("/");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error en el login:", error.response.data.error
        );
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
        </Grid>
      </Grid>
    </Container>
  );
};
