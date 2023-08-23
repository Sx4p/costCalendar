import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function BasicButtons({buttonText}) {
    const navigate = useNavigate();

    return (
        <Button color="secondary" sx={{
            color: "cornflowerblue"
        }} onClick={() => navigate("/")}>{buttonText}</Button>
    );
}

export default BasicButtons;