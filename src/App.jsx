import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Grid container>
      <Header />
      <MainPage />
      <Outlet />
    </Grid>
  );
}

export default App;
