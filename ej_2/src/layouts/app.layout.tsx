import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" aria-label="Home">
            <Link to="/">
              <Home />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
