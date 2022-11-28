import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';

function App() {
  return (
    <Grid container>
      <Header />
      <Outlet />
    </Grid>
  );
}

export default App;
