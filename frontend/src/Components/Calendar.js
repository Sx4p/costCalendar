import * as React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {useNavigate} from "react-router-dom";
import {DateContext} from "../App";
import {useContext} from "react";

function BasicDateCalendar() {
    const navigate = useNavigate();
    const {date, setDate} = useContext(DateContext);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                sx={{
                width: "400px",
                backgroundColor: "lightblue",
                opacity: "0.8"
            }
            } onChange={(value) => {
                setDate(new Date(value.$y, value.$M, value.$D).toLocaleDateString('en-ZA'))
                if (date !== null) {
                    navigate("/add");
                }
            }}/>
        </LocalizationProvider>
    );
}

export default BasicDateCalendar;