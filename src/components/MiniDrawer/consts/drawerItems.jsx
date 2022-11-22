import DatasetIcon from '@mui/icons-material/Dataset';
import StorageIcon from '@mui/icons-material/Storage';

const drawerItems = [
  {
    id: 0,
    icon: <DatasetIcon />,
    label: 'Data Asset View',
    route: 'data-asset',
  },
  {
    id: 1,
    icon: <StorageIcon />,
    label: 'Pipeline Run View',
    route: 'pipeline-run',
  },
];

export default drawerItems;
