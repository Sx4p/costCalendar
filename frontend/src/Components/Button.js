import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function BasicButton({buttonText}) {
    const navigate = useNavigate();

    return (
        <Button color="secondary" sx={{
            color: "cornflowerblue"
        }} onClick={() => navigate("/")}>{buttonText}</Button>
    );
}

export default BasicButton;