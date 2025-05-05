import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import DropdownMenu from './components/DropdownMenu';
import { lowerSection, mainSection } from './data';


function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <main>
        <header>
          <nav>
            <DropdownMenu
              mainSection={mainSection} 
              lowerSection={lowerSection}
            />
          </nav>
        </header>
      </main>
    </MantineProvider>
  );
}

export default App;
