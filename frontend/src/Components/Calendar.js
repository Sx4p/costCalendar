import * as React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {useNavigate} from "react-router-dom";

function BasicDateCalendar() {
    const navigate = useNavigate();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                sx={{
                    width: "400px",
                    backgroundColor: "lightblue",
                    opacity: "0.8"
                }
                } onChange={(value) => {
                const newDate = new Date(value.$y, value.$M, value.$D).toLocaleDateString('sv-SE')
                navigate("/add/" + newDate);
            }}/>
        </LocalizationProvider>
    );
}

export default BasicDateCalendar;