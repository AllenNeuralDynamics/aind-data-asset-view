import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HighlightCard from '../components/Cards/HighlightCard';
import cards from '../components/Cards/consts/cardItems';

const theme = createTheme();

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        spacing={0}
        justifyContent="center"
        direction="column"
      >
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="text.primary"
                sx={{ paddingTop: '50px' }}
                gutterBottom
              >
                Allen Institute for Neural Dynamics
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                The Allen Institute for Neural Dynamics explores the brain’s
                activity, at the level of individual neurons and the whole
                brain, to reveal how we interpret our environments to make
                decisions. We aim to discover how neural signaling – and changes
                in that signaling – allow the brain to perform complex but
                fundamental computations and drive flexible behaviors. Our
                experiments and openly shared resources will shed light on
                behavior, memory, how we handle uncertainty and risk, how humans
                and other animals chase rewards – and how some or all of these
                complicated cognitive functions go awry in neuropsychiatric
                disorders such as depression, ADHD, or addiction.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              />
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <HighlightCard cardDetails={card} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </Grid>
    </ThemeProvider>
  );
}
