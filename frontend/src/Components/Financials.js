import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Financials({financials, handleDelete}) {
    const rows = financials;

    const columns = [
        {field: "id", headerName: "ID", width: 100},
        {
            field: "type",
            headerName: "Type",
            width: 200,
            editable: false,
        },
        {
            field: "subtype",
            headerName: "Subtype",
            width: 200,
            editable: false,
        },
        {
            field: "amount",
            headerName: "Amount",
            type: "number",
            width: 150,
            editable: false,
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Delete",
            width: "150",
            align: "center",
            headerAlign: 'center',
            cellClassName: "actions",
            getActions: ({id}) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        label="Delete"
                        onClick={() => handleDelete(id)}
                    />
                ]
            }
        }
    ];

    return (
        <Box sx={{height: 319, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                pageSizeOptions={[4]}
                disableRowSelectionOnClick
                sx={{fontFamily: "Indie Flower", fontSize: "30px", fontWeight: 600}}
            />
        </Box>
    );
}