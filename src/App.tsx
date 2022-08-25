import { MantineProvider } from '@mantine/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AppLayout/>
      </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
