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

function App() {
  
     const theme = createTheme({
          palette: {
             mode: 'dark',
          
          },

      typography: {
        fontFamily: ["Poppins", 'Open Sans'].join(',')
      }      

     })

     



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
       <Route component={NotFound} />
       </Switch>
       
       </Container>
    </ThemeProvider>
  );
}

export default App;
