import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import exaSPIM from '../../../images/AIND_exaspim.jpg';
import allenHQ from '../../../images/allen-institute-hq.jpg';
import astrocytes from '../../../images/astrocytes_and_astrocyte_morphology.jpg';

const dataCard = (
  <>
    <Typography paragraph variant="body1" color="primary">
      <Link href="https://codeocean.allenneuraldynamics.org/">Code Ocean</Link>
    </Typography>

    <Typography paragraph variant="body1" color="primary">
      <Link href="https://dandiarchive.org/">DANDI Archive</Link>
    </Typography>

    <Typography paragraph variant="body1" color="primary">
      <Link href="https://github.com/allenNeuralDynamics">GitHub</Link>
    </Typography>

    <Typography paragraph variant="body1" color="primary">
      <Link href="https://www.protocols.io/workspaces/allen-institute-for-neural-dynamics">
        Protocols.io
      </Link>
    </Typography>

    <Typography paragraph variant="body1" color="primary">
      <Link href="https://osf.io/">Open Science Framework</Link>
    </Typography>
  </>
);

const publicationsCard = (
  <>
    <Typography paragraph variant="body1">
      <Link href="https://www.nature.com/articles/s41592-022-01468-5">
        <strong>
          A hybrid open-top light-sheet microscope for versatile multi-scale
          imaging of cleared tissues
        </strong>
      </Link>
    </Typography>
    <Typography sx={{ fontStyle: 'italic' }}>
      Nature Methods, May 2022
    </Typography>
    <Typography>Glaser, A.K., Bishop, K.W., Barner, L.A. et al.</Typography>
  </>
);

const cards = [
  {
    id: 1,
    title: 'Highlights',
    description: 'Events and News',
    image: allenHQ,
  },
  {
    id: 2,
    title: 'Publications',
    description: 'Recent publications from AIND',
    image: astrocytes,
    content: publicationsCard,
  },
  {
    id: 3,
    title: 'Data',
    description: 'Protocols.io, OSF, GitHub, etc',
    image: exaSPIM,
    content: dataCard,
  },
];

export default cards;
