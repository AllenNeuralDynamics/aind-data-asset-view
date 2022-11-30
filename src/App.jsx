import { Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import DataAsset from './pages/DataAsset';
import Pipeline from './pages/Pipeline';

function App() {
  return (
    <Grid container>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/data-asset" element={<DataAsset />} />
        <Route path="/pipline-run" element={<Pipeline />} />
      </Routes>
    </Grid>
  );
}

export default App;
