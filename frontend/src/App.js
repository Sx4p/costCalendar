import './App.css';
import React, {createContext, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Adder from "./Pages/Adder";
import Main from "./Pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/add",
        element: <Adder/>
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

