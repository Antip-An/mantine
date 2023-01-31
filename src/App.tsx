import { Outlet } from "react-router-dom";
import { AppShell, Navbar, Header } from '@mantine/core';

import Header1 from "./components/header";
import Footer from "./components/footer";
import Liner from "./components/liner";

export default function App() {
  return (
    <AppShell
    padding="md"
    // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
    header={<Header height={60} p="xs">{"liner"}</Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
    >
      <Header1 />
      <Outlet />
      {/* <Footer /> */}
    </AppShell>
  );
}
