// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import { Menu, Search, Settings, Help, Apps, AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <img src="C:\Users\vinut\Desktop\Upskill\gmail-clone\gmail-clone\src\gmail-logo.png" alt="Gmail logo" style={{ marginRight: '10px' }} />
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#f1f3f4', marginLeft: 'auto', width: '50%' }}>
          <div style={{ padding: '0 16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search />
          </div>
          <InputBase
            placeholder="Search mail"
            inputProps={{ 'aria-label': 'search' }}
            style={{ paddingLeft: '40px', width: '100%' }}
          />
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <IconButton color="inherit">
            <Help />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <IconButton color="inherit">
            <Apps />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
