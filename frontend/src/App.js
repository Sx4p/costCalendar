import './App.css';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DayDetails from "./Pages/DayDetails";
import Main from "./Pages/Main";
import NavBar from "./Components/NavBar";

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

