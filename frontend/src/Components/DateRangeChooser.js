import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import DateChooser from "./DateChooser";
import dayjs from "dayjs";

function DateRangeChooser({fromDate, toDate, setFromDate, setToDate}) {
    return (
        <Paper sx={{
            width: {xs: "50%", md: "65%"},
            borderRadius: "30px",
            padding: "5px",
            opacity: "0.8",
            paddingTop: "20px",
            paddingBottom: "15px",
            marginBottom: "30px",
            marginTop: "30px"
        }}>
            <Typography
                sx={{
                    fontFamily: "Calligraffitti",
                    fontSize: 50,
                    fontWeight: 800,
                    color: "steelblue",
                    textAlign: "center"
                }}>Statement between two dates:</Typography>
            <Box sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: {xs: "column", md: "row"}
            }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
                    <DateChooser label={"From:"} date={dayjs(fromDate)} dateSetter={setFromDate}/>
                    <Typography sx={{marginLeft: {md: "10px"}, marginRight: {md: "10px"}}}>-</Typography>
                    <DateChooser label={"To:"} date={dayjs(toDate)} dateSetter={setToDate}/>
                </LocalizationProvider>
            </Box>
        </Paper>
    );
}

export default DateRangeChooser;