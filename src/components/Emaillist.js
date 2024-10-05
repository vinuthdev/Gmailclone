// src/components/EmailList.js
import React, { useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Refresh, MoreVert } from '@mui/icons-material';
import EmailRow from './EmailRow';
import emailsData from '../data/emails.json';

const EmailList = () => {
  const [emails, setEmails] = useState(emailsData);

  const toggleSelect = (id) => {
    setEmails(
      emails.map(email =>
        email.id === id ? { ...email, selected: !email.selected } : email
      )
    );
  };

  const toggleStar = (id) => {
    setEmails(
      emails.map(email =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
        <Checkbox />
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      {emails.map(email => (
        <EmailRow key={email.id} email={email} toggleSelect={toggleSelect} toggleStar={toggleStar} />
      ))}
    </div>
  );
};

export default EmailList;
