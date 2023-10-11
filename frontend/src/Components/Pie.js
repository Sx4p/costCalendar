import React from 'react';
import {pieArcClasses, PieChart} from "@mui/x-charts/PieChart";

const groupFinancialsBySubtype = (financials) => {
    const groups = financials.reduce((result, item) => {
        const {subtype, amount} = item;
        result[subtype] = (result[subtype] || 0) + amount;
        return result;
    }, {});

    const result = [];
    for (const key in groups) {
        result.push({value: groups[key], label: key})
    }
    return result;
}

function Pie({financials}) {
    return (
        <PieChart
            series={[
                {
                    data: groupFinancialsBySubtype(financials),
                    highlightScope: {faded: 'global', highlighted: 'item'},
                    faded: {innerRadius: 30, additionalRadius: -30},
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                }
            ]}
            sx={{[`& .${pieArcClasses.faded}`]: {fill: 'gray'}}}
            height={300}/>
    );
}

export default Pie;