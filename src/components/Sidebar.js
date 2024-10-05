// src/components/Sidebar.js
import React from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Inbox, Star, Send, Drafts } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div style={{ width: '240px', borderRight: '1px solid #ddd' }}>
      <Button variant="contained" color="primary" startIcon={<Inbox />} style={{ margin: '10px' }}>
        Compose
      </Button>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      {/* Add more sidebar items as needed */}
    </div>
  );
};

export default Sidebar;
