import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';
import './index.css';

// clears the console for every hmr
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    // eslint-disable-next-line no-console
    console.clear();
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
