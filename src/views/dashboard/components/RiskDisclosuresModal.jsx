import React, { useState } from 'react';
import { Modal, Box, Typography, Button, IconButton, Checkbox, FormControlLabel, useMediaQuery } from '@mui/material';
import { Description } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const RiskDisclosuresModal = ({ open, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Modal open={open} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isSmallScreen ? '90%' : 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 2,
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {/* Header with Close Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            id="modal-title"
            variant="h3"
            component="h2"
            sx={{ fontWeight: 'bold' }}
            display={'flex'}
            justifyContent={'center'}
            gap={1}
          >
            <Description />
            Risk disclosures on derivatives{' '}
          </Typography>
        </Box>

        {/* Main Content Section */}
        <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body1" component="div" sx={{ mb: 2, fontSize: 12 }}>
            <ul style={{ paddingLeft: 0, listStyleType: 'square', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>
                9 out of 10 individual traders in the equity Futures and Options Segment incurred net losses.
              </li>
              <li style={{ marginBottom: '8px' }}>On average, loss-makers registered a net trading loss close to ₹50,000.</li>
              <li style={{ marginBottom: '8px' }}>
                Over and above the net trading losses incurred, loss-makers expended an additional 28% of net trading losses as transaction
                costs.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Those making net trading profits incurred between 15% to 50% of such profits as transaction costs.
              </li>
            </ul>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12, mb: 2 }}>
            Source: SEBI study dated January 25, 2023 on “Analysis of Profit and Loss of Individual Traders dealing in equity Futures and
            Options (F&O) Segment”, wherein Aggregate Level findings are based on annual Profit/Loss incurred by individual traders in
            equity F&O during FY 2021-22.
          </Typography>
        </Box>

        {/* Checkbox and Button Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
            label={
              <Typography component="span">
                I accept{' '}
                <Typography component="span" sx={{ fontWeight: 'bold', color: 'blue', display: 'inline' }}>
                  Terms and Conditions
                </Typography>
              </Typography>
            }
          />

          <Button variant="contained" color="primary" disabled={!isChecked} onClick={onClose}>
            I Understand
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RiskDisclosuresModal;
