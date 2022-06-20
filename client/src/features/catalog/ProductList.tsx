import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {

    products: Product[];

}


export default function ProductList({products}: Props) {

      return (
        <Grid container spacing={2}>
        {products.map(product => (
               <Grid item key={product.id} xs={12} sm={6} lg={4} > 
               <ProductCard product={product} />
               </Grid>
           ))}
       </Grid>
      )

}
