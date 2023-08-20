import React, {useContext} from 'react';
import {DateContext} from "../App";
import BasicButtons from "../Components/Button";
import './DayDetails.css';

function DayDetails() {
    const {date} = useContext(DateContext);
    return (
        <div className="Adder">
            <p className="DateHolder">{date}</p>
            <BasicButtons/>
        </div>

    );
}

export default DayDetails;