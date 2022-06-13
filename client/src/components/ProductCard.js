import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({product}) {
  console.log('product', product);
  console.log('prod-image', product.image);
  // const [imgPath, setImgPath] = useState('');
  // setImgPath(product.image);
  const imgPath = product.image;
  // const prodImage = require(prodPath).default;
  // console.log(prodPath);
  return (
    <Card sx={{ minWidth: 375, boxShadow: 7 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="250"
        src={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small">Buy Now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}