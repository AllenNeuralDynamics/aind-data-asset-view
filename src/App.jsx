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
      <div>
        <InputForm data-testid="input-form" handleData={childToParent} />
        <RenderForm data-testid="render-form" userInput={data} />
      </div>
    </Grid>
  );
}

export default App;
