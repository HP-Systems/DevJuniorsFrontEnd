import { Home } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <AppBar style={{ backgroundColor: "#2b2d42" }}>
        <Toolbar>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Home style={{ marginRight: 8 }} />
            <Typography variant="h6" component="div">DevJuniors</Typography>
            </a>
            <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
            <a href="/negocio/inicio" style={{ textDecoration: 'none', color: 'inherit',fontFamily:'arial' }}>Inicio</a>
            <a href="/negocio/proyectos" style={{ textDecoration: 'none', color: 'inherit', fontFamily:'arial'}}>Proyectos</a>
            <a href="/negocio/configuracion" style={{ textDecoration: 'none', color: 'inherit', fontFamily:'arial'}}>Mi cuenta</a>
            </div>
        </Toolbar>
        </AppBar>
        <Outlet />
        </>
    );
}

export default Navbar;