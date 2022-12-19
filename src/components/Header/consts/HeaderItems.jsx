import HomeIcon from '@mui/icons-material/Home';
import DatasetIcon from '@mui/icons-material/Dataset';

const appBarItems = [
  {
    id: 0,
    icon: <HomeIcon />,
    label: 'Home',
    route: '/',
  },
  {
    id: 1,
    icon: <DatasetIcon />,
    label: 'Data Asset View',
    route: '/data-asset',
  },
];

export default appBarItems;
