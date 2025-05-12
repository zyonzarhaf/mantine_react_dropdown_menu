import React from 'react';

import { MantineProvider } from '@mantine/core';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <Navbar />
      <Hero /> 
    </MantineProvider>
  );
}

export default App;
