import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import {Outlet} from "react-router-dom";

const pages = ['Expenditures', 'Revenues', 'Financial statements'];

function NavBar() {
    return (
        <>
        <AppBar position={"sticky"} sx={{backgroundColor: "steelblue", opacity: 0.8}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <EditCalendarOutlinedIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Calligraffitti",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Cost Calendar
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
    </>
    );
}
export default NavBar;