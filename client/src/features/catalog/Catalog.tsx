
import { Box, Grid, Pagination, Paper, Typography} from "@mui/material";
import { useEffect } from "react";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {fetchFilters, fetchProductsAsync, productSelectors, setProductParams } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";


const sortOptions = [
      {value: 'name', label: 'A-Z'},
      {value: 'priceDesc', label: 'Price - High to low'},
      {value: 'price', label: 'Price - Low to high'}
]



export default function Catalog() {

     const products = useAppSelector(productSelectors.selectAll);
     const {productsLoaded, status, filtersLoaded, brands, types, productParams} = useAppSelector(state => state.catalog);
     const dispatch = useAppDispatch();


  useEffect(() => {
      
     if (!productsLoaded) dispatch(fetchProductsAsync());
}, [productsLoaded, dispatch])


useEffect(() => {
     if (!filtersLoaded) dispatch(fetchFilters());
}, [dispatch, filtersLoaded])


if (status.includes('pending')) return <LoadingComponent message='Loading products...' />
    

     return (
         <Grid container spacing={4}>
              <Grid item xs={3}>
               <Paper sx={{mb:2}}>
                    <ProductSearch />
               </Paper>
               <Paper sx={{mb: 2, p: 2}}>
                  <RadioButtonGroup
                              selectedValue={productParams.orderBy}
                              options={sortOptions} 
                              onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
                          />
              </Paper>


            <Paper sx={{mb: 2, p: 2}}>
                   <CheckboxButtons 
                        items={brands}
                        checked={productParams.brands}
                        onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
                   /> 
            </Paper>

            <Paper sx={{mb: 2, p: 2}}>
            <CheckboxButtons 
                        items={types}
                        checked={productParams.types}
                        onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
                   />  
            </Paper>            
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
          </Grid>
           <Grid item xs={3} />
           <Grid item xs={9}>
           <Box display='flex' justifyContent='space-between' alignItems='center'>
                      <Typography>
                              Explore further
                      </Typography>
                       <Pagination 
                             color = 'standard'
                             size='medium'
                             count={2}
                             page={1}
                             sx={{mb:2}}
                             
                         />
                 </Box>
           </Grid> 
      </Grid>
     
     )
}

