import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import {Link, Outlet} from "react-router-dom";
import {MenuItem} from "@mui/material";

const pages = ['Expenses', 'Incomes', 'Financial statements'];

function NavBar() {
    return (
        <>
            <AppBar position={"sticky"} sx={{backgroundColor: "steelblue", opacity: 0.8}}>
                <Toolbar>
                    <MenuItem component={Link} to={"/"}>
                        <Typography sx={{display: "flex"}}>
                            <EditCalendarOutlinedIcon href="/" sx={{display: "flex"}}/>
                            <Typography
                                variant="h6"
                                href="/"
                                sx={{
                                    display: {xs: "none", md: "inline-block"},
                                    fontWeight: 700,
                                    fontFamily: "Calligraffitti",
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                    paddingLeft: "5px"
                                }}>
                                Cost Calendar
                            </Typography>
                        </Typography>
                    </MenuItem>
                    <Box sx={{flexGrow: 1, display: "flex"}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2, color: 'white', display: 'block', margin: "10px",
                                    '&:hover': {
                                        border: "0.5px solid",
                                        borderColor: "white"
                                    }
                                }}>{page}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default NavBar;