import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import {useState} from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/product";
import { currencyFormat } from "../../app/util/util";

interface Props {
     product: Product;
}

export default function ProductCard({product}: Props) {
     const [loading, setLoading] = useState(false);
     const {setBasket} = useStoreContext();
     

    function handleAddItem(productId: number) {
         setLoading(true);
         agent.Basket.addItem(productId)
              .then(basket => setBasket(basket))
              .catch(error => console.log(error)) 
              .finally(() => setLoading(false));
    }


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
                {currencyFormat(product.price)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
              </Typography>
            </CardContent>
            <CardActions>
              <LoadingButton 
                    loading={loading} 
                     onClick={() => handleAddItem(product.id)} 
                     size="small">Add to cart</LoadingButton>
              <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
          </Card>
      )

}
