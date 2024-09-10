import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Input, Avatar, CircularProgress } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import useSnackbar from 'ui-component/use-snackbar';

const LOCAL_STORAGE_KEY = 'authToken';

const UpdateForm = ({ handleClose, firstName, lastName, email_id, contactNumber, middleName, _id }) => {
  // State to manage form inputs and file input
  const [formData, setFormData] = useState({
    firstName: firstName || '',
    middleName: middleName || '',
    lastName: lastName || '',
    email_id: email_id,
    contactNumber: contactNumber
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(''); // State to hold the image preview URL
  const [isLoading, setIsLoading] = useState(false);
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader and disable button

    // Create FormData object
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('middleName', formData.middleName);
    data.append('lastName', formData.lastName);
    data.append('email_id', formData.email_id);
    data.append('contactNumber', formData.contactNumber);

    // Append file if selected
    if (selectedFile) {
      data.append('profileImage', selectedFile);
    }

    try {
      // Make POST request to update profile
      const Token = localStorage.getItem(LOCAL_STORAGE_KEY);
      const response = await axios.put(`https://jetalgosoftware.com/user/update?uuid=rbetnr`, data, {
        headers: {
          'Content-Type': 'application/json',
          token: Token
        }
      });
      console.log(response.data);
      showSnackbar('Profile Updated Successfully');
      handleClose(); // Close modal on success
    } catch (error) {
      console.error('Error updating profile:', error);
      showSnackbar(error.response?.data?.error.msg || 'Server 500', 'error');
    } finally {
      setIsLoading(false); // Hide loader and enable button
    }
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

      {/* Avatar displays the preview if available, otherwise a default image */}
      <Avatar src={preview || 'https://localhost:3000/src/assets/images/users/user-round.svg'} sx={{ width: 100, height: 100, mx: 'auto' }}>
        {/* {profile.avatarInitial} */}
      </Avatar>

      <Button variant="contained" component="label" startIcon={<PhotoCamera />} sx={{ mt: 1, mb: 3 }}>
        Change Picture
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
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
        value={formData.email_id}
        onChange={handleInputChange}
        fullWidth
        required
        disabled
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        name="phone"
        value={formData.contactNumber}
        onChange={handleInputChange}
        fullWidth
        required
        disabled
      />

      <Button type="submit" variant="contained" color="primary" disabled={isLoading} sx={{ position: 'relative' }}>
        {isLoading ? <CircularProgress size={24} /> : 'Update'}
      </Button>
      <Button onClick={handleClose} variant="outlined" color="secondary">
        Cancel
      </Button>

      {/* Snackbar for notifications */}
      {SnackbarComponent}
    </Box>
  );
};

export default UpdateForm;
