import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode >
  </MantineProvider>
);

reportWebVitals();
