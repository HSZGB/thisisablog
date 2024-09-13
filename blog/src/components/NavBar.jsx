// NavBar.js
import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Article" component={Link} to="/post/:id" />
          <Tab label="New" component={Link} to="/new-post" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
