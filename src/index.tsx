import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import {DEFAULT_MARKET} from "./models/Markets";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <Router>
          <Routes>
              <Route path="/:market" element={<App/>} />
              <Route path="/" element={<Navigate replace to={`/${DEFAULT_MARKET}`} />} />
          </Routes>
      </Router>
);