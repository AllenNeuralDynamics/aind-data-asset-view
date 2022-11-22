import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Pipeline from './pages/Pipeline';
import dashboardTheme from './dashboardTheme';
import DataAsset from './pages/DataAsset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="data-asset" element={<DataAsset />} />
          <Route path="pipeline-run" element={<Pipeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
