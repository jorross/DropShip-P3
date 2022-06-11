import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=" "
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This product is pretty dope.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}