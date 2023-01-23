import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideDrawer from '../SideDrawer/SideDrawer';
import HeaderItems from './consts/HeaderItems';

function Header() {
  /**
   * Functional component that holds state and routes for navigation tabs
   * Renders the Header for the app.
   */

  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ letterSpacing: 4 }}> AIND </Typography>
        {isMatch ? (
          <SideDrawer />
        ) : (
          <Tabs
            sx={{ marginLeft: 'auto' }}
            textColor="inherit"
            value={tab}
            onChange={(e, value) => setTab(value)}
            indicatorColor="secondary"
          >
            {HeaderItems.map((item) => (
              <Tab
                key={item.id}
                label={item.label}
                component={Link}
                to={`${item.route}`}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
