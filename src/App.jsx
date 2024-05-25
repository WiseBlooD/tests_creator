import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
