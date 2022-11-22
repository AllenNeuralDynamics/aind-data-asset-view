import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function DataAsset() {
  return (
    <Grid item md={12} sx={{ marginLeft: '300px' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 9 }}>
        <div>This is the Data Asset View page.</div>
      </Box>
    </Grid>
  );
}

export default DataAsset;
