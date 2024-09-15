import { Button, Container, Grid, Typography, Card, CardContent, AppBar, Toolbar, Link as MuiLink } from "@mui/material";
import { Home, Code, Palette, Storage } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <AppBar style={{ backgroundColor: "#2b2d42" }}>
        <Toolbar>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Home style={{ marginRight: 8 }} />
            <Typography variant="h6" component="div">DevJuniors</Typography>
          </a>
          <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
            <a href="#login" style={{ textDecoration: 'none', color: 'inherit',fontFamily:'arial' }}>Iniciar Sesión</a>
            <NavLink to="/register" style={{ textDecoration: 'none', color: 'inherit', fontFamily:'arial' }}>Registro</NavLink>
          </div>
        </Toolbar>
      </AppBar>

      <main style={{ flex: 1 }}>
        {/* Sección principal de la página */}
        <section style={{ padding: "100px", backgroundColor: "#74200F", color: "#fff", textAlign: "center" }}>
          <Container>
            <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: "bold" }}>
              Conecta Estudiantes con Negocios para Innovar
            </Typography>
            <Typography variant="h6" gutterBottom>
              DevJuniors es una plataforma que une a pequeños y medianos negocios con estudiantes universitarios,
              impulsando proyectos tecnológicos innovadores.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#2b2d42" }}>Únete Ahora</Button>
          </Container>
        </section>

        {/* ¿Cómo funciona? */}
        <section id="how-it-works" style={{ padding: "48px 0", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold", color: "#2b2d42" }}>
              ¿Cómo Funciona?
            </Typography>
            <Typography variant="body1" gutterBottom style={{ maxWidth: "700px", margin: "0 auto", color: "#2b2d42" }}>
              Conectamos a negocios con estudiantes universitarios para desarrollar soluciones innovadoras que impulsen el crecimiento
              de las empresas mientras los estudiantes obtienen experiencia real y beneficios económicos.
            </Typography>
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: 32 }}>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Code style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      Empresas
                    </Typography>
                    <Typography variant="body2">
                      Los negocios pueden publicar sus necesidades y recibir propuestas innovadoras de los estudiantes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Palette style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      Estudiantes
                    </Typography>
                    <Typography variant="body2">
                      Los estudiantes proponen soluciones creativas y tecnológicas para resolver los desafíos empresariales.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Storage style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      Resultados
                    </Typography>
                    <Typography variant="body2">
                      Las empresas pueden implementar proyectos exitosos, y los estudiantes obtienen experiencia y compensación.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Sección de beneficios */}
        <section id="benefits" style={{ padding: "48px 0", backgroundColor: "#2b2d42", color: "#fff", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold" }}>
              Beneficios
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#fff" }}>Para Empresas</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>
                  Acceso a ideas frescas y soluciones tecnológicas sin necesidad de altos costos iniciales.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#fff" }}>Para Estudiantes</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>
                  Oportunidades de aplicar conocimientos en proyectos reales y ganar reconocimiento y compensación.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Sección de llamada a la acción */}
        <section id="learn-more" style={{ padding: "48px 0", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold", color: "#2b2d42" }}>
              ¿Listo para Comenzar?
            </Typography>
            <Typography variant="body1" gutterBottom style={{ maxWidth: "700px", margin: "0 auto", color: "#2b2d42" }}>
              Únete a DevJuniors y comienza a formar parte de una comunidad que conecta el talento universitario con las necesidades empresariales.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#74200F", color: "#fff", marginTop: 16 }}>Explorar Proyectos</Button>
          </Container>
        </section>
      </main>

      <footer style={{ padding: 16, backgroundColor: "#2b2d42", color: "#fff", textAlign: "center" }}>
        <Typography variant="body2" style={{ color: "#8d99ae" }}>© 2023 DevJuniors. Todos los derechos reservados.</Typography>
        <div style={{ marginTop: 8 }}>
          <MuiLink underline="none" color="inherit" style={{ marginRight: 16 }} href="#">
            Términos de Servicio
          </MuiLink>
          <MuiLink underline="none" color="inherit" href="#">
            Privacidad
          </MuiLink>
        </div>
      </footer>
    </>
  );
}
