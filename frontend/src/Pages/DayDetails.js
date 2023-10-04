import React, {useEffect, useState} from 'react';
import BasicButton from "../Components/Button";
import './DayDetails.css';
import Stack from "@mui/material/Stack";
import Financials from "../Components/Financials";
import FinancialsForm from "../Components/FinancialsForm";
import {useParams} from "react-router-dom";

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
        console.log("delete")
    }

    const handleSave = (item) => {
        console.log(item)
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
        <div className="DayDetails">
            <p className="DateHolder">{date}</p>
            <Stack>
                <Financials financials={financials} handleDelete={handleDelete}/>
            </Stack>
            <FinancialsForm handleSave={handleSave}/>
            <BasicButton buttonText={"Save"}/>
        </div>

    );
}

export default DayDetails;