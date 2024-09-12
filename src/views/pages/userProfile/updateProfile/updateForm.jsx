import React, { useState, memo } from 'react';
import { Box, Typography, TextField, Button, Avatar, CircularProgress, Input } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useSnackbar from 'ui-component/use-snackbar';

const LOCAL_STORAGE_KEY = 'authToken';

const UpdateForm = memo(({ handleClose, firstName, lastName, email_id, contactNumber, middleName, fetchUserData }) => {
  const [preview, setPreview] = useState('');
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  // Function to handle profile update API call
  const handleProfileUpdate = async (values) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);

    try {
      const response = await axios.post(
        'https://jetalgosoftware.com/user/update?uuid=rbetnr',
        {
          first_name: values.firstName,
          middle_name: values.middleName,
          last_name: values.lastName,
          email_id: values.email_id,
          contact_number: values.contactNumber,
          profileImage: values.profileImage
        },
        {
          headers: {
            token
          }
        }
      );
      return response.data.userDetails;
    } catch (error) {
      throw new Error(error.response?.data?.error?.msg || 'Server Error');
    }
  };

  // useMutation hook to handle profile updates
  const mutation = useMutation(handleProfileUpdate, {
    onSuccess: () => {
      fetchUserData();
      showSnackbar('Profile Updated Successfully', 'success');
      handleClose();
    },
    onError: (error) => {
      showSnackbar(error.message, 'error');
    }
  });

  // Handle file input changes for preview and Formik state update
  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue('profileImage', file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: firstName || '',
          middleName: middleName || '',
          lastName: lastName || '',
          email_id: email_id || '',
          contactNumber: contactNumber || '',
          profileImage: null
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email_id: Yup.string().email('Invalid email').required('Email is required'),
          contactNumber: Yup.string().required('Contact Number is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          mutation.mutate(values, {
            onSettled: () => setSubmitting(false)
          });
        }}
      >
        {({ errors, handleChange, setFieldValue, handleBlur, values, isSubmitting }) => (
          <Form>
            <Box
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
                src={preview || 'https://localhost:3000/src/assets/images/users/user-round.svg'}
                sx={{ width: 100, height: 100, mx: 'auto' }}
              />

              <Button variant="contained" component="label" startIcon={<PhotoCamera />} sx={{ mt: 1, mb: 3 }}>
                Change Picture
                <Input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setFieldValue)} sx={{ display: 'none' }} />
              </Button>

              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                required
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />

              <TextField
                label="Middle Name"
                variant="outlined"
                name="middleName"
                value={values.middleName}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />

              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                required
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />

              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email_id"
                value={values.email_id}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                required
                disabled
                error={Boolean(errors.email_id)}
                helperText={errors.email_id}
              />

              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                name="contactNumber"
                value={values.contactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                required
                disabled
                error={Boolean(errors.contactNumber)}
                helperText={errors.contactNumber}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting || mutation.isLoading}
                sx={{ position: 'relative' }}
                startIcon={mutation.isLoading ? <CircularProgress size={20} /> : null}
              >
                {isSubmitting || mutation.isLoading ? 'Updating...' : 'Update'}
              </Button>

              <Button onClick={handleClose} variant="outlined" color="secondary">
                Cancel
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      {SnackbarComponent}
    </>
  );
});

export default UpdateForm;
