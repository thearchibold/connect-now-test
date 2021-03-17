import React from "react";
import './App.css';
import Navigation from "../src/app"
import { ToastProvider } from 'react-toast-notifications';
import {BrowserRouter} from "react-router-dom";



function App() {
    return (
        <BrowserRouter >
        <ToastProvider
            autoDismiss
            autoDismissTimeout={6000}
            placement="top-center"
        >
            <div className={"App"}>
                <Navigation/>
            </div>
        </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
