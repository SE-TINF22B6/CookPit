import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import UploadIcon from '@mui/icons-material/Upload';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Anchor = 'left';

export default function TemporaryDrawer() {
  const [state, setState] = useState({left:false});

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const texts = ['Startseite', 'Alle Rezepte', 'Rezeptgenerator', 'Rezept hochladen', 'Konto'];
  const paths = ['/', '/rezept/alle', '/rezept/generator', '/rezept/hochladen', '/konto'];  
  const icons = [<HomeIcon />, <MenuBookIcon />, <EngineeringIcon />, <UploadIcon />, <AccountIcon />];


  const DrawerList = (anchor:Anchor) => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}>
        <List>
        {texts.map((text, index) => (
            <ListItem key={text} disablePadding>
            <Link to={paths[index]} style={{
                display: 'flex',
                width: '100%',
                color: 'black',
                textDecoration: 'none',
                }}>
                <ListItemIcon style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
            </Link>
            </ListItem>
        ))}
        </List>
    </Box>
  );

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        {(['left'] as const).map((anchor) => (
      <React.Fragment key={anchor}>
          <Button
          onClick={toggleDrawer(anchor, true)}
          style={{
            border: 'none',
            color: 'black',
            width: 'auto',
            padding: '0px',
            minWidth: '0px',
            height: '60px',
            marginTop: '8px',
            }}>
                <MenuIcon style={{fontSize: '60px'}} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {DrawerList(anchor)}
          </Drawer>
        </React.Fragment>
        ))}
    </div>
  );
}
