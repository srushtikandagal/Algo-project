// UpdateProfile.js
import React from 'react';
import { Modal } from '@mui/material';
import UpdateForm from './updateForm';

const UpdateProfile = ({ open, handleClose, profile }) => {
  return (
    <Modal open={open}>
      <UpdateForm handleClose={handleClose} profile={profile} />
    </Modal>
  );
};

export default UpdateProfile;
