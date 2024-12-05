import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.instructions}
        </Typography>
        <p style={{fontSize:"30px"}}>Ingredients:</p>
        <Typography variant="body2" color="text.secondary">
          {product.ingredients}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Button size="small">View</Button> */}
        <Chip
          icon={<StarIcon sx={{ fontSize: "15px" }} />}
          label={product.rating}
          color="success"
          sx={{ borderRadius: "10px" }}
        />
      </CardActions>
    </Card>
  );
}
