import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

// Custom Styled Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  borderBottom: `2px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected
  }
}));

const TopUsersTable = () => {
  const topUsers = [
    { name: 'Alice', trades: 100, revenue: '₹10,000' },
    { name: 'Bob', trades: 90, revenue: '₹9,500' },
    { name: 'Charlie', trades: 85, revenue: '₹8,700' },
    { name: 'Diana', trades: 80, revenue: '₹8,200' },
    { name: 'Eve', trades: 75, revenue: '₹7,500' },
    { name: 'Frank', trades: 70, revenue: '₹7,000' }
  ];

  return (
    <Box sx={{ mt: 3 }}>
      {/* Heading for Top Users */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
          color: 'primary.main',
          textTransform: 'uppercase'
        }}
      >
        Top Users
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">User</StyledTableCell>
              <StyledTableCell align="center">Trades</StyledTableCell>
              <StyledTableCell align="center">Revenue</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topUsers.map((user, index) => (
              <StyledTableRow key={index}>
                <TableCell align="center">
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 1 }}>
                      <AccountCircleIcon />
                    </Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">{user.trades}</TableCell>
                <TableCell align="center">{user.revenue}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopUsersTable;
