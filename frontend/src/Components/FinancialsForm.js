import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MyIconButton from "./MyIconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {createTheme, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, ThemeProvider} from "@mui/material";
import {useState} from "react";
import Alert from "@mui/material/Alert";

function FinancialsForm({handleSave}) {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [subtype, setSubtype] = useState("");
    const [amount, setAmount] = useState(0);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleFormSave = () => {
        if (type === "" || subtype === "" || amount === 0) {
            setIsInvalid(true);
        } else {
            const item = {type: type, subtype: subtype, amount: amount};
            handleSave(item)
            setType("")
            setSubtype("")
            setAmount(0)
            setOpen(false);
        }
    };

    const theme = createTheme({
        typography: {
            fontFamily: "Indie Flower"
        }
    });

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <ThemeProvider theme={theme}>
                <MyIconButton icon={<AddCircleOutlineIcon/>} handleOnClick={handleClickOpen}/>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle sx={{
                        fontSize: "25px",
                        fontWeight: 600
                    }}>Add new expenditure or revenue:
                    </DialogTitle>
                    <DialogContent>
                        <FormControl sx={{m: 1, minWidth: 150}} size="small">
                            <InputLabel id="select-type">Type</InputLabel>
                            <Select
                                labelId="select-type"
                                id="select-type"
                                value={type}
                                label="Type"
                                onChange={(event) => setType(event.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="INCOME">Income</MenuItem>
                                <MenuItem value="EXPENSE">Expense</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{m: 1, maxWidth: 150}}
                            size="small"
                            autoFocus
                            margin="dense"
                            id="subtype"
                            label="Subtype"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setSubtype(event.target.value)}/>
                        <TextField
                            sx={{m: 1, maxWidth: 150}}
                            size="small"
                            autoFocus
                            margin="dense"
                            id="amount"
                            label="Amount"
                            type="number"
                            fullWidth
                            variant="outlined"
                            onChange={(event) => setAmount(event.target.value)}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={handleFormSave}>Save</Button>
                    </DialogActions>
                    <Snackbar open={isInvalid} autoHideDuration={5000} onClose={() => setIsInvalid(false)}>
                        <Alert severity={"error"}>
                            Please fill out every field!
                        </Alert>
                    </Snackbar>
                </Dialog>
            </ThemeProvider>
        </Grid>
    );
}

export default FinancialsForm;