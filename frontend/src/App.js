import './App.css';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DayDetails from "./Pages/DayDetails";
import Main from "./Pages/Main";
import NavBar from "./Components/NavBar";
import Incomes from "./Pages/Incomes";
import Expenses from "./Pages/Expenses";
import Statements from "./Pages/Statements";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children: [
            {
                path: "/",
                element: <Main/>
            },
            {
                path: "/add/:date",
                element: <DayDetails/>
            },
            {
                path: "/incomes",
                element: <Incomes/>
            },
            {
                path: "/expenses",
                element: <Expenses/>
            },
            {
                path: "/statements",
                element: <Statements/>
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

