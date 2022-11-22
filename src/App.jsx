import { useState } from 'react';
import Grid from '@mui/material/Grid';
import InputForm from './components/InputForm';
import RenderForm from './components/RenderForm';
import MiniDrawer from './components/MiniDrawer/MiniDrawer';

function App() {
  const [data, setData] = useState();

  const childToParent = (childData) => {
    setData(childData);
  };

  return (
    <Grid container>
      <MiniDrawer />
      <Grid item md={8} sx={{ marginLeft: '300px' }}>
        <div>
          <InputForm data-testid="input-form" handleData={childToParent} />
          <RenderForm data-testid="render-form" userInput={data} />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
