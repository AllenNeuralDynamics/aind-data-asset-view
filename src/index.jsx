import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import dashboardTheme from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
