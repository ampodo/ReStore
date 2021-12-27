import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
     product: Product;
}

export default function ProductCard({product}: Props) {
      return (
            <Card>
                 <CardHeader
                   avatar={
                        
                    <Avatar sx={{ bgcolor: 'white' }}>
                    {product.name.charAt(0).toUpperCase()}
                   </Avatar>
                                         
                   }
                   title={product.name}
                   titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'white' }
                }}
            />
            <CardMedia component="img"
              sx={{ height: 360, backgroundSize: 'contain'}}
              image={product.pictureUrl}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom color="white" variant="h5">
                €{(product.price).toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to cart</Button>
              <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
          </Card>
      )

}
