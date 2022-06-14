import { Container, createTheme, CssBaseline} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import  ContactPage  from "../../features/contact/ContactPage";
import { Route, Switch } from "react-router-dom";
import  AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import HomePage from "../../features/home/Homepage";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import { useStoreContext } from "../context/StoreContext";
import { useEffect, useState } from "react";
import { getCookie } from "../util/util";
import agent from  "../api/agent";
import LoadingComponent from "./LoadingComponent";
import CheckoutPage from "../../features/checkout/CheckoutPage";



function App() {
     const {setBasket} = useStoreContext();
     const [loading, setLoading] = useState(true);
     
     useEffect(() => {
           const buyerId = getCookie('buyerId');
           if (buyerId) {
              agent.Basket.get()
                 .then(basket => setBasket(basket))
                 .catch(error => console.log(error))
                 .finally(() => setLoading(false));
           } else {
              setLoading(false);
             }
            
     }, [setBasket])
    
    
     const theme = createTheme({
          palette: {
             mode: 'dark',
          
          },

      typography: {
        fontFamily: ["Poppins", 'Open Sans'].join(',')
      }      

     })

     if (loading) return <LoadingComponent message='Loading app...' />
  


  return (
    
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
       <Header />
       <Container>
       <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/catalog' component={Catalog} />
       <Route path='/catalog/:id' component={ProductDetails} />
       <Route path='/about' component={AboutPage} />
       <Route path='/contact' component={ContactPage} />
       <Route path='/server-error' component={ServerError} />
       <Route path='/basket' component={BasketPage} />
       <Route path='checkout' component={CheckoutPage} />
       <Route component={NotFound} />
       </Switch>
       
       </Container>
    </ThemeProvider>
  );
}

export default App;
