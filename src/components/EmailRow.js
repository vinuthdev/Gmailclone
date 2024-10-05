// src/components/EmailRow.js
import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { StarBorder, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const EmailRow = ({ email, toggleSelect, toggleStar }) => {
  return (
    <ListItem
      button
      style={{
        borderBottom: '1px solid #f1f3f4',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
    >
      <ListItemIcon>
        <Checkbox
          checked={email.selected}
          onChange={() => toggleSelect(email.id)}
          inputProps={{ 'aria-label': 'select email' }}
        />
      </ListItemIcon>
      <ListItemIcon>
        <IconButton onClick={() => toggleStar(email.id)}>
          {email.starred ? <Star style={{ color: '#f4c20d' }} /> : <StarBorder />}
        </IconButton>
      </ListItemIcon>
      <ListItemText
        primary={`${email.sender} - ${email.subject || 'No subject'}`} // Fallback for empty subject
        secondary={email.message || 'No message'} // Fallback for empty message
        style={{ marginLeft: '10px' }}
      />
      <div style={{ marginLeft: 'auto', paddingRight: '20px', color: 'grey', whiteSpace: 'nowrap' }}>
        {email.time}
      </div>
    </ListItem>
  );
};

export default EmailRow;
