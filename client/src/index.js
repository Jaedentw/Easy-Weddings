import React from 'react';
import './index.css';
import Application from "./components/Application";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
)
