import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import MiniDrawer from './components/MiniDrawer/MiniDrawer';

function App() {
  const [title, setTitle] = useState('Data Asset View');
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <MiniDrawer title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
