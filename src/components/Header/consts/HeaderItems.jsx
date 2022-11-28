import HomeIcon from '@mui/icons-material/Home';
import DatasetIcon from '@mui/icons-material/Dataset';
import StorageIcon from '@mui/icons-material/Storage';

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
    route: 'data-asset',
  },
  {
    id: 2,
    icon: <StorageIcon />,
    label: 'Pipeline Run View',
    route: 'pipeline-run',
  },
];

export default appBarItems;
