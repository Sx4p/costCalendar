import './App.css';
import React, {createContext, useState} from "react";
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
                path: "/add",
                element: <DayDetails/>
            }
        ]
    }
])

export const DateContext = createContext({
    date: null, setDate: () => {
    }
})

function App() {
    const [date, setDate] = useState();
    return (
        <DateContext.Provider value={{date, setDate}}>
            <>
                <RouterProvider router={router}/>
            </>
        </DateContext.Provider>
    );
}

export default App;

