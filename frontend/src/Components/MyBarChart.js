import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {axisClasses} from '@mui/x-charts';
import {CircularProgress} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {BarChart} from '@mui/x-charts/BarChart';

const addDayToDate = (stringDate) => {
    const date = new Date(stringDate);
    const datePlusDay = new Date(date.setDate(date.getDate() + 1));
    return datePlusDay.toISOString().split('T')[0];
}

const createDateGroups = (fromDate, toDate) => {
    const groups = [];
    let actualDate = fromDate;
    while (actualDate <= toDate) {
        groups.push({date: actualDate, incomes: 0, expenses: 0})
        actualDate = addDayToDate(actualDate)
    }
    return groups;
}

const groupFinancialsByDate = (financials, groups, isIncomes) => {
    financials.forEach((item) => {
        groups.forEach(group => {
            if (group.date === item.date) {
                isIncomes ? group.incomes += item.amount : group.expenses += item.amount;
            }
        })
    })
    return groups;
}

const cutYearFromDates = (groups) => {
    return groups.forEach((group) => group.date = group.date.split("-").slice(1).join("/"))
}

const valueFormatter = (value) => `${value} HUF`;

const chartSetting = {
    yAxis: [{label: 'money (HUF)'}],
    height: 400,
    sx: {
        padding: 1,
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "rotate(-90deg) translate(0px, -20px)"
        },
        "& .MuiChartsAxis-directionX": {
            "& .MuiChartsAxis-tickLabel": {
                rotate: {xs: "-90deg", md: "-45deg"},
                fontSize: {xs: 7, md: 10}
            }
        }
    }
};

function MyBarChart({fromDate, toDate, incomes, expenses}) {
    const [dateGroups, setDateGroups] = useState([]);

    useEffect(() => {
        const groups = createDateGroups(fromDate, toDate);
        groupFinancialsByDate(incomes, groups, true);
        groupFinancialsByDate(expenses, groups, false);
        cutYearFromDates(groups);
        setDateGroups(groups)
    }, [fromDate, toDate, expenses, incomes])

    return (dateGroups.length > 0 ?
            <Box sx={{width: {xs: "90%", md: "95%"}, marginBottom: "30px"}}>
                <Paper sx={{
                    width: "100%",
                    borderRadius: "30px",
                    padding: "5px",
                    opacity: "0.8"
                }}>
                    <Typography sx={{
                        fontFamily: "Calligraffitti",
                        fontSize: 40,
                        fontWeight: 800,
                        color: "steelblue",
                        margin: "15px",
                        textAlign: "center"
                    }}> Distribution of financials in the selected period </Typography>
                    <BarChart
                        dataset={dateGroups}
                        xAxis={[{scaleType: "band", dataKey: "date", label: "Days"}]}
                        series={[
                            {dataKey: "incomes", label: "Incomes", valueFormatter},
                            {dataKey: "expenses", label: "Expenses", valueFormatter},
                        ]}
                        {...chartSetting}
                    />
                </Paper>
            </Box> : <CircularProgress/>
    );
}

export default MyBarChart;