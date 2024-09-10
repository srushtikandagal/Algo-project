// UpdateForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Input, Avatar } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UpdateForm = ({ handleClose, profile }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: profile.name.split(' ')[0] || '',
    middleName: profile.name.split(' ')[1] || '',
    lastName: profile.name.split(' ')[2] || '',
    email: profile.email,
    phone: profile.phone
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 1,
        mx: 'auto',
        maxWidth: 500,
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant="h5" textAlign="center">
        Update Profile
      </Typography>

      <Avatar
        src="http://localhost:3000/src/assets/images/users/user-round.svg"
        sx={{ bgcolor: profile.avatarColor, width: 100, height: 100, mx: 'auto' }}
      >
        {profile.avatarInitial}
      </Avatar>

      <Button variant="contained" component="label" startIcon={<PhotoCamera />} sx={{ mt: 1, mb: 3 }}>
        Change Picture
        <Input
          type="file"
          accept="image/*"
          // onChange={handleFileChange}
          sx={{ display: 'none' }} // Hide the input
        />
      </Button>

      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Middle Name"
        variant="outlined"
        name="middleName"
        value={formData.middleName}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
      <Button onClick={handleClose} variant="outlined" color="secondary">
        Cancel
      </Button>
    </Box>
  );
};

export default UpdateForm;
