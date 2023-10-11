import React from 'react';
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Pie from "./Pie";

const calculateFinancials = (financials) => {
    return financials.reduce((sum, item) => sum + item.amount, 0);
}

function FinancialsPies({incomes, expenses}) {
    return (
        <Paper sx={{
            width: {xs: "90%", md: "75%"},
            borderRadius: "30px",
            padding: "5px",
            opacity: "0.8",
            marginBottom: "30px"
        }}>
            <Typography sx={{
                fontFamily: "Calligraffitti",
                fontSize: 40,
                fontWeight: 800,
                color: "steelblue",
                margin: "15px",
                textAlign: "center"
            }}>Financials grouped by type and subtype</Typography>
            <Grid container textAlign="center" sx={{
                alignItems: "center", justifyContent: "center",
                display: "flex", flexDirection: {xs: "column", md: "row"}
            }}>
                <Grid item xs={6} maxWidth={"100%"}>
                    <Typography sx={{
                        fontFamily: "Calligraffitti",
                        fontSize: 30,
                        fontWeight: 800,
                        color: "steelblue",
                        margin: "10px"
                    }}>Total incomes: {calculateFinancials(incomes)}</Typography>
                    <Pie financials={incomes}/>
                </Grid>
                <Grid item xs={6} maxWidth={"100%"}>
                    <Typography sx={{
                        fontFamily: "Calligraffitti",
                        fontSize: 30,
                        fontWeight: 800,
                        color: "steelblue",
                        margin: "10px"
                    }}>Total expenses: {calculateFinancials(expenses)}</Typography>
                    <Pie financials={expenses}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FinancialsPies;