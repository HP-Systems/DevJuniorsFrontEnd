import { Button, Container, Grid, Typography, Card, CardContent, AppBar, Toolbar, Link as MuiLink } from "@mui/material";
import { Home, Code, Palette, Storage } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#edf2f4", display: "flex", flexDirection: "column" }}>
      <AppBar position="static" style={{ backgroundColor: "#2b2d42" }}>
        <Toolbar>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Home style={{ marginRight: 8 }} />
            <Typography variant="h6" component="div">WebExplorer</Typography>
          </a>
          <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
            <a href="#what-is" style={{ textDecoration: 'none', color: 'inherit' }}>¿Qué es?</a>
            <a href="#components" style={{ textDecoration: 'none', color: 'inherit' }}>Componentes</a>
            <NavLink to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Registro</NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <main style={{ flex: 1 }}>
        <section style={{ padding: "48px 0", backgroundColor: "#ef233c", color: "#fff", textAlign: "center" }}>
          <Container>
            <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: "bold" }}>
              Descubre el Mundo de las Páginas Web
            </Typography>
            <Typography variant="h6" gutterBottom>
              Explora los fundamentos de las páginas web y cómo dan forma a nuestra experiencia en línea.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#2b2d42" }}>Comienza a Aprender</Button>
          </Container>
        </section>
        <section id="what-is" style={{ padding: "48px 0", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold", color: "#2b2d42" }}>
              ¿Qué es una Página Web?
            </Typography>
            <Typography variant="body1" gutterBottom style={{ maxWidth: "700px", margin: "0 auto", color: "#2b2d42" }}>
              Una página web es un documento digital diseñado para ser mostrado en un navegador web. Es la unidad básica de la World Wide Web, accesible a través de una dirección URL única.
            </Typography>
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: 32 }}>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Code style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      HTML
                    </Typography>
                    <Typography variant="body2">
                      El lenguaje de marcado que estructura el contenido de la página.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Palette style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      CSS
                    </Typography>
                    <Typography variant="body2">
                      El lenguaje que define el estilo y la presentación visual de la página.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: "#8d99ae" }}>
                  <CardContent>
                    <Storage style={{ fontSize: 48, color: "#2b2d42" }} />
                    <Typography variant="h6" component="div" style={{ marginTop: 16 }}>
                      JavaScript
                    </Typography>
                    <Typography variant="body2">
                      El lenguaje de programación que añade interactividad y funcionalidad dinámica.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="components" style={{ padding: "48px 0", backgroundColor: "#2b2d42", color: "#fff", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold" }}>
              Componentes de una Página Web
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#ef233c" }}>Encabezado</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>Contiene el logotipo, título y navegación principal del sitio.</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#ef233c" }}>Contenido Principal</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>El área donde se presenta la información principal de la página.</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#ef233c" }}>Barra Lateral</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>Información adicional, enlaces relacionados o widgets.</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ color: "#ef233c" }}>Pie de Página</Typography>
                <Typography variant="body2" style={{ color: "#8d99ae" }}>Información de contacto, enlaces útiles y derechos de autor.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="learn-more" style={{ padding: "48px 0", textAlign: "center" }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: "bold", color: "#2b2d42" }}>
              ¿Quieres Aprender Más?
            </Typography>
            <Typography variant="body1" gutterBottom style={{ maxWidth: "700px", margin: "0 auto", color: "#2b2d42" }}>
              Explora recursos adicionales para profundizar en el mundo del desarrollo web y crear tus propias páginas.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#d90429", color: "#fff", marginTop: 16 }}>Explorar Recursos</Button>
          </Container>
        </section>
      </main>
      <footer style={{ padding: 16, backgroundColor: "#2b2d42", color: "#fff", textAlign: "center" }}>
        <Typography variant="body2" style={{ color: "#8d99ae" }}>© 2023 WebExplorer. Todos los derechos reservados.</Typography>
        <div style={{ marginTop: 8 }}>
          <a href="#" passHref>
            <MuiLink underline="none" color="inherit" style={{ marginRight: 16 }}>Términos de Servicio</MuiLink>
          </a>
          <a href="#" passHref>
            <MuiLink underline="none" color="inherit">Privacidad</MuiLink>
          </a>
        </div>
      </footer>
    </div>
  );
}
