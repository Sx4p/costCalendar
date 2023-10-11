import React from 'react';
import {DatePicker} from "@mui/x-date-pickers";

function DateChooser({label, date, dateSetter}) {
    return (
        <DatePicker
            label={label}
            value={date}
            onChange={(date) => dateSetter(new Date(date.$y, date.$M, date.$D).toLocaleDateString('sv-SE'))}
            slotProps={{textField: {error: false}}}
            sx={{borderColor: "black", margin: "20px"}}
        />
    );
}

export default DateChooser;