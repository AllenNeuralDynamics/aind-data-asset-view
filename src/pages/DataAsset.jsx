import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputForm from '../components/InputForm';
import RenderForm from '../components/RenderForm';

function DataAsset() {
  const [data, setData] = useState();

  const childToParent = (childData) => {
    setData(childData);
  };

  return (
    <Grid item md={12} sx={{ marginLeft: '100px' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 9 }}>
        <div>
          <InputForm data-testid="input-form" handleData={childToParent} />
          <RenderForm data-testid="render-form" userInput={data} />
        </div>
      </Box>
    </Grid>
  );
}

export default DataAsset;
