import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import {Link, Outlet} from "react-router-dom";
import {MenuItem} from "@mui/material";

const pages = [
    {name: "Expenses", path: "/expenses"},
    {name: "Incomes", path: "/incomes"},
    {name: "Financial statements", path: "/statements"}];

function NavBar() {
    return (
        <>
            <AppBar position={"sticky"} sx={{backgroundColor: "steelblue", opacity: 0.8}}>
                <Toolbar>
                    <MenuItem component={Link} to={"/"}>
                        <Typography sx={{display: "flex"}}>
                            <EditCalendarOutlinedIcon href="/" sx={{display: "flex"}}/>
                            <Box
                                component="span"
                                href="/"
                                sx={{
                                    display: {xs: "none", md: "inline-block"},
                                    fontWeight: 700,
                                    fontSize: 20,
                                    fontFamily: "Calligraffitti",
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                    paddingLeft: "5px"
                                }}>
                                Cost Calendar
                            </Box>
                        </Typography>
                    </MenuItem>
                    <Box sx={{flexGrow: 1, display: "flex"}}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                href={page.path}
                                sx={{
                                    my: 2, color: 'white', display: 'block', margin: "10px",
                                    '&:hover': {
                                        border: "0.5px solid",
                                        borderColor: "white"
                                    }
                                }}>{page.name}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default NavBar;