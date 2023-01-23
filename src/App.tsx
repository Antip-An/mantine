import { Outlet } from "react-router-dom";
import { Grid } from "@mantine/core";

import Header from "./components/header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
