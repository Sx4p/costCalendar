import React, {useEffect, useState} from 'react';
import FinancialsList from "../Components/FinancialsList";
import Typography from "@mui/material/Typography";
import {CircularProgress, Container} from "@mui/material";

const getIncomes = () => {
    return fetch(`/api/financials/incomes`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
}

function Incomes() {
    const [incomes, setIncomes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getIncomes().then(incomes => setIncomes(incomes))
            .then(() => setIsLoaded(true))
    }, [])

    const handleDelete = (id) => {
        return fetch(`/api/financials/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            if (res.ok) {
                setIncomes(incomes.filter(item => item.id !== id));
            }
        })
    }

    return (
        <Container sx={{textAlign: "center"}}>
            <Typography sx={{
                fontFamily: "Calligraffitti",
                fontSize: 50,
                fontWeight: 800,
                color: "steelblue",
                paddingTop: "20px",
                paddingBottom: "15px"
            }}>Incomes</Typography>
            {isLoaded ? <FinancialsList financials={incomes} handleDelete={handleDelete}/> : <CircularProgress/>}
        </Container>
    );
}

export default Incomes;