import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import MyBarChart from "../Components/MyBarChart";
import DateRangeChooser from "../Components/DateRangeChooser";
import FinancialsPies from "../Components/FinancialsPies";

const getExpensesBetweenDates = (fromDate, toDate) => {
    return fetch(`/api/financials/expenses/${fromDate}/${toDate}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

const getIncomesBetweenDates = (fromDate, toDate) => {
    return fetch(`/api/financials/incomes/${fromDate}/${toDate}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

function Statements() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (fromDate !== "" && toDate !== "") {
            Promise.all([
                getIncomesBetweenDates(fromDate, toDate).then(incomes => setIncomes(incomes)),
                getExpensesBetweenDates(fromDate, toDate).then(expenses => setExpenses(expenses))
            ]).then(() => setIsLoaded(true));
        }
    }, [fromDate, toDate])

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <DateRangeChooser fromDate={fromDate} toDate={toDate} setFromDate={setFromDate} setToDate={setToDate}/>
            {isLoaded && <FinancialsPies incomes={incomes} expenses={expenses}/>}
            {isLoaded && <MyBarChart fromDate={fromDate} toDate={toDate} incomes={incomes} expenses={expenses}/>}
        </Grid>
    );
}

export default Statements;