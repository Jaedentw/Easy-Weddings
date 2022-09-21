import React from 'react';
import './index.css';
import Application from "./components/Application";
import * as ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Application/>)
