import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import {visuallyHidden} from '@mui/utils';
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(id, date, subtype, amount) {
    return {
        id,
        date,
        subtype,
        amount
    };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "id",
        disablePadding: false,
        label: "Id",
    },
    {
        id: "date",
        disablePadding: false,
        label: "Date",
    },
    {
        id: "subtype",
        disablePadding: false,
        label: "Subtype",
    },
    {
        id: "amount",
        disablePadding: false,
        label: "Amount",
    }
];

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell sx={{fontFamily: "Calligraffitti", fontWeight: 800, fontSize: 25}}
                               key={headCell.id}
                               align="right"
                               padding={headCell.disablePadding ? 'none' : 'normal'}
                               sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function FinancialsList({financials, handleDelete}) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const data = financials.map(item => createData(item.id, item.date, item.subtype, item.amount));
        setRows(data);
    }, [financials])

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, rows],
    );

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <Box sx={{width: "70%", opacity: "0.8"}}>
                <Paper sx={{width: "100%", mb: 2, borderRadius: "30px", padding: "5px"}}>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size="medium"
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {visibleRows.map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={index}
                                            sx={{cursor: 'pointer'}}
                                        >
                                            <TableCell align="right" sx={{
                                                fontFamily: "Calligraffitti",
                                                fontSize: 20
                                            }}>{row.id}</TableCell>
                                            <TableCell align="right" sx={{
                                                fontFamily: "Calligraffitti",
                                                fontSize: 20
                                            }}>{row.date}</TableCell>
                                            <TableCell align="right" sx={{
                                                fontFamily: "Calligraffitti",
                                                fontSize: 20
                                            }}>{row.subtype}</TableCell>
                                            <TableCell align="right" sx={{
                                                fontFamily: "Calligraffitti",
                                                fontSize: 20
                                            }}>{row.amount}</TableCell>
                                            <TableCell align="right" sx={{
                                                fontFamily: "Calligraffitti",
                                                fontSize: 20
                                            }} onClick={() => handleDelete(row.id)}>
                                                {<DeleteIcon/>}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </Grid>
    );
}

export default FinancialsList;