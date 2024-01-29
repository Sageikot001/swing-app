import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material';
import theme from './theme/index';
import App from './App';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
