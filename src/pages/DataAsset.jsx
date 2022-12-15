import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputForm from '../components/InputForm';
import RenderForm from '../components/RenderForm';

function DataAsset() {
  const [typeSelection, setTypeSelection] = useState();
  const [querySelection, setQuerySelection] = useState();

  return (
    <Grid item md={12} sx={{ marginLeft: '100px' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 9 }}>
        <div>
          <InputForm data-testid="input-form" setTypeCallback={setTypeSelection} setQueryCallback={setQuerySelection} />
          <RenderForm data-testid="render-form" typeDropdown={typeSelection} querySelect={querySelection}/>
        </div>
      </Box>
    </Grid>
  );
}

export default DataAsset;
