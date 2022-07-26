import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const products = [
  {
    name: 'Slime Rancher',
    price: '$7.99',
  },
  {
    name: 'Ultimate Fishing Simulator VR',
    price: '$29.99',
  },
  {
    name: 'Left 4 Dead 2',
    price: '$9.99',
  },
  {
    name: 'Resident Evil 2',
    price: '39.99',
  },
];

const payments = [
  { name: 'Payment method:', detail: 'Visa ending in **55' },
  { name: 'Gift options:', detail: 'None; this purchase is for your own account.' },
  { name: 'Steam account:', detail: 'JSmith27' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $87.96
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I agree to the terms of the Steam Subscriber Agreement (last updated Feb 24, 2022.)"
          />
        </Grid>
    </React.Fragment>
  );
}