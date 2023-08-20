import './App.css';
import React, {createContext, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DayDetails from "./Pages/DayDetails";
import Main from "./Pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/add",
        element: <DayDetails/>
    }
])

export const DateContext = createContext({date: null, setDate: () => {}})

function App() {
    const [date, setDate] = useState();
    return (
        <DateContext.Provider value={{date, setDate}}>
            <div>
                <RouterProvider router={router}/>
            </div>
        </DateContext.Provider>
    );
}

export default App;

