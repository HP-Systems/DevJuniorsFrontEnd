import { Home } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const NavbarE = () => {
    return (
        <>
        <AppBar style={{ backgroundColor: "#2b2d42" }}>
        <Toolbar>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Home style={{ marginRight: 8 }} />
            <Typography variant="h6" component="div">DevJuniors</Typography>
            </a>
            <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
            <NavLink href="/estudiante/inicio" style={{ textDecoration: 'none', color: 'inherit',fontFamily:'arial' }}>Inicio</NavLink>
            <a href="/estudiante/proyectos" style={{ textDecoration: 'none', color: 'inherit', fontFamily:'arial'}}>Proyectos</a>
            <a href="/estudiante/configuracion" style={{ textDecoration: 'none', color: 'inherit', fontFamily:'arial'}}>Mi cuenta</a>
            </div>
        </Toolbar>
        </AppBar>
        <Outlet />
        </>
    );
}

export default NavbarE;