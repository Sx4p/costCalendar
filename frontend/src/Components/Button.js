import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function BasicButtons() {
    const navigate = useNavigate();

    return (
        <Button color="secondary" sx={{
            color: "cornflowerblue"
        }} onClick={() => navigate("/")}>Save</Button>
    );
}

export default BasicButtons;