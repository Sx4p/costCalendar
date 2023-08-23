import React, {useContext, useState} from 'react';
import {DateContext} from "../App";
import BasicButtons from "../Components/Button";
import './DayDetails.css';
import MyIconButton from "../Components/MyIconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Stack from "@mui/material/Stack";
import Financials from "../Components/Financials";

function DayDetails() {
    const {date} = useContext(DateContext);
    const [financials, setFinancials] = useState([
            {id: 1, type: "expenditure", subtype: "napszecsa", amount: 1500},
            {id: 2, type: "expenditure", subtype: "ebéd", amount: 2500},
            {id: 3, type: "expenditure", subtype: "vonaljegy", amount: 450},
            {id: 4, type: "revenue", subtype: "bem bevi", amount: 25500},
            {id: 5, type: "revenue", subtype: "bem bevi", amount: 23000},
            {id: 6, type: "revenue", subtype: "bem bevi", amount: 21500}
        ]
    );

    const handleDelete = (id) => {
        const copy = [...financials];

        for (let i = 0; i < copy.length; i++) {
            let obj = copy[i];
            if (obj.id === parseInt(id)) {
                copy.splice(i, 1);
            }
        }
        setFinancials(copy);
    }

    return (
        <div className="DayDetails">
            <p className="DateHolder">{date}</p>
            <Stack>
                <Financials financials={financials} handleDelete={handleDelete}/>
            </Stack>
            <MyIconButton icon={<AddCircleOutlineIcon/>} handleOnClick={() => console.log("add new item")}/>
            <BasicButtons buttonText={"Save"}/>
        </div>

    );
}

export default DayDetails;