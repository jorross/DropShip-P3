import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product}) {
  // const image = require(`${product.image}`).default;
  return (
    <Card sx={{ maxWidth: 345 }}>
      {console.log("product", product)}
      <CardMedia
        component="img"
        alt={product.name}
        height="180"
        image=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}