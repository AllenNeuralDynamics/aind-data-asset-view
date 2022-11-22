import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputForm from './components/InputForm';
import RenderForm from './components/RenderForm';
import MiniDrawer from './components/MiniDrawer/MiniDrawer';

function App() {
  const [data, setData] = useState();
  const [title, setTitle] = useState('Data Asset View');
  const location = useLocation();

  const childToParent = (childData) => {
    setData(childData);
  };

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <MiniDrawer title={title} />
      <Grid item md={8} sx={{ marginLeft: '150px' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 9 }}>
          <div>
            <InputForm data-testid="input-form" handleData={childToParent} />
            <RenderForm data-testid="render-form" userInput={data} />
          </div>
        </Box>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default App;
