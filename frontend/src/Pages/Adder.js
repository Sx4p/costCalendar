import React, {useContext} from 'react';
import {DateContext} from "../App";
import BasicButtons from "../Components/Button";
import './Adder.css';

function Adder() {
    const {date} = useContext(DateContext);
    return (
        <div className="Adder">
            <p className="DateHolder">{date}</p>
            <BasicButtons/>
        </div>

    );
}

export default Adder;