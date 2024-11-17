import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';  // Using Grid for better responsiveness

export default function FormPropsTextFields() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { margin: 1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2, // Add padding to the form
        }}
        noValidate
        autoComplete="off"
      >
        {/* First Row with Two Fields */}
        <Grid container spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="first-name"
              label="First Name"
              type="text"
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="last-name"
              label="Last Name"
              type="text"
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Second Row with Two Fields */}
        <Grid container spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              autoComplete="bday"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Third Row with Two Fields */}
        <Grid container spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone"
              label="Phone"
              type="tel"
              autoComplete="tel"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              label="Country"
              type="text"
              autoComplete="country"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Fourth Row with Two Fields */}
        <Grid container spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="alt-email"
              label="Alternative Email"
              type="email"
              autoComplete="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="alt-phone"
              label="Alternative Phone"
              type="tel"
              autoComplete="tel"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Fifth Row with One Field */}
        <Grid container spacing={2} sx={{ maxWidth: '800px' }}>
          <Grid item xs={12}>
            <TextField
              id="alt-country"
              label="Alternative Country"
              type="text"
              autoComplete="country"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#1976d2', // Darken the button on hover
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
