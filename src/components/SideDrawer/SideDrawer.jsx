import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderItems from '../Header/consts/HeaderItems';

function SideDrawer() {
  /**
   * Functional component to hold state and routes for the side navigation menu.
   */

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {HeaderItems.map((item) => (
            <ListItemButton
              key={item.id}
              component={Link}
              to={`${item.route}`}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default SideDrawer;
