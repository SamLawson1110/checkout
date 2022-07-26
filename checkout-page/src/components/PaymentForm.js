import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function PaymentForm() {

  return (
    <React.Fragment>
      <Grid container spacing={0}>
      <Typography variant="h7" gutterBottom>
        Please select a payment method
      </Typography>
      </Grid>
      <Grid container spacing={3}>

      </Grid>
      <Grid container spacing={0}>
      <Typography variant="h7" >
        You'll have the chance to review your order before it's placed
      </Typography>
      </Grid>
    </React.Fragment>
  );
}