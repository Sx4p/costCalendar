import React, {useEffect, useState} from 'react';
import FinancialsList from "../Components/FinancialsList";
import Typography from "@mui/material/Typography";
import {CircularProgress, Container} from "@mui/material";

const getExpenses = () => {
    return fetch(`/api/financials/expenses`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getExpenses().then(expenses => setExpenses(expenses))
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
                setExpenses(expenses.filter(item => item.id !== id));
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
            }}>Expenses</Typography>
            {isLoaded ? <FinancialsList financials={expenses} handleDelete={handleDelete}/> : <CircularProgress/>}
        </Container>
    );
}

export default Expenses;