import React, { memo } from 'react';
import { Modal } from '@mui/material';
import UpdateForm from './updateForm';

const UpdateProfile = memo(({ open, handleClose, profile, fetchUserData }) => {
  const { firstName, lastName, email_id, contactNumber, middleName } = profile;

  return (
    <Modal open={open} onClose={handleClose}>
      <UpdateForm
        handleClose={handleClose}
        firstName={firstName}
        lastName={lastName}
        email_id={email_id}
        contactNumber={contactNumber}
        middleName={middleName}
        fetchUserData={fetchUserData}
      />
    </Modal>
  );
});

export default UpdateProfile;
