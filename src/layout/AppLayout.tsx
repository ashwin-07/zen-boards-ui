import { AppShell } from '@mantine/core';
import React from 'react'
import MainRoutes from './MainRoutes';
import Navbar from './SideNavbar';

const AppLayout = () => {
  return (
    <AppShell padding="md" navbar={<Navbar/> }>
        <MainRoutes/>
    </AppShell>

  );
}

export default AppLayout