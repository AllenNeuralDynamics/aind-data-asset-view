import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function MainPage() {
  return (
    <Grid item md={12} sx={{ marginLeft: '300px' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 9 }}>
        <div>This is the main page.</div>
      </Box>
    </Grid>
  );
}

export default MainPage;
