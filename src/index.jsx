import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import dashboardTheme from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="pipeline-run" element={<Pipeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
