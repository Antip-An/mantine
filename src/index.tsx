import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/signin";
import Home from "./pages/home";
import Search from "./pages/search";
import Works from "./pages/works";
import MyWorks from "./pages/myworks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/works" element={<Works />} />
            <Route path="/myworks" element={<MyWorks />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </MantineProvider>
);

reportWebVitals();
