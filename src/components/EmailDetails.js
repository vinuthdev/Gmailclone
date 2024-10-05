// src/components/EmailDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import emailsData from '../data/emails.json';

const EmailDetail = () => {
  const { id } = useParams();
  const email = emailsData.find(email => email.id === id);

  if (!email) return <div>Email not found.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{email.subject}</h2>
      <h4>From: {email.sender}</h4>
      <p>{email.message}</p>
    </div>
  );
};

export default EmailDetail;
