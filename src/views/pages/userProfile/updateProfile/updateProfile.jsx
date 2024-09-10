// UpdateProfile.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Modal } from '@mui/material';
import UpdateForm from './updateForm';

const UpdateProfile = ({ open, handleClose, profile }) => {
  return (
    <Modal open={open}>
      <UpdateForm
        handleClose={handleClose}
        firstName={profile.firstName}
        lastName={profile.lastName}
        email_id={profile.email_id}
        contactNumber={profile.contactNumber}
        middleName={profile.middleName}
        _id={profile.id}
      />
    </Modal>
  );
};

export default UpdateProfile;
