import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import BrokerList from './BrokerList';
import BrokerForm from './BrokerForm';
import AddBrokerPage from './AddBrokerPage';

const BrokerPage = () => {
  const [selectedBroker, setSelectedBroker] = useState(null);

  const handleSelectBroker = (broker) => {
    setSelectedBroker(broker);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={7.5}>
        <BrokerList onSelectBroker={handleSelectBroker} selectedBrokerId={selectedBroker?.id} />
      </Grid>
      <Grid item xs={12} md={4.5}>
        {selectedBroker ? <BrokerForm selectedBroker={selectedBroker} /> : <AddBrokerPage text={'Please select a broker'} />}
      </Grid>
    </Grid>
  );
};

export default BrokerPage;
