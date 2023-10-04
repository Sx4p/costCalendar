import React, {useEffect, useState} from 'react';
import BasicButton from "../Components/Button";
import './DayDetails.css';
import Financials from "../Components/Financials";
import FinancialsForm from "../Components/FinancialsForm";
import {useParams} from "react-router-dom";
import {Card, Grid} from "@mui/material";

const getFinancialsByDate = (date) => {
    return fetch(`/api/financials/${date}`, {})
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
}

function DayDetails() {
    const {date} = useParams();
    const [financials, setFinancials] = useState([]);

    useEffect(() => {
        if (date !== undefined) {
            getFinancialsByDate(date).then(financials => setFinancials(financials))
        }
    }, [date])

    const handleDelete = (id) => {
        return fetch(`/api/financials/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            if (res.ok) {
                setFinancials(financials.filter(item => item.id !== id));
            }
        })
    }

    const handleSave = (item) => {
        item.date = date;
        return fetch(`/api/financials/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then((res) => res.json())
            .then((item) => setFinancials([...financials, item]))
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <Card sx={{
                boxShadow: 3,
                backgroundColor: "white",
                opacity: "0.8",
                width: "55%",
                padding: "40px",
                margin: "20px",
                textAlign: "center",
                borderRadius: "30px"
            }}>
                <p className="DateHolder">{date}</p>
                <Financials financials={financials} handleDelete={handleDelete}/>
                <FinancialsForm handleSave={handleSave}/>
                <BasicButton buttonText={"Back"}/>
            </Card>
        </Grid>
    );
}

export default DayDetails;