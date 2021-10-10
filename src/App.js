import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Home from '../src/pages/Home/home';
// import Home from '@pages/Home/home.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
