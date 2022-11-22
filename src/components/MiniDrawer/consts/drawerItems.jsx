import DatasetIcon from '@mui/icons-material/Dataset';
import StorageIcon from '@mui/icons-material/Storage';

const drawerItems = [
  {
    id: 0,
    icon: <StorageIcon />,
    label: 'Data Asset View',
    route: '/',
  },
  {
    id: 1,
    icon: <DatasetIcon />,
    label: 'Pipeline Run View',
    route: 'pipeline-run',
  },
];

export default drawerItems;
