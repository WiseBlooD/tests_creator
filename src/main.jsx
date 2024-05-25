import App from './App.jsx';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from "./store/UserStore";
import TestsStore from "./store/TestStore";

export const Context = createContext();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            tests: new TestsStore(),
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);
