import { Container, createTheme, CssBaseline} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import  ContactPage  from "../../features/contact/ContactPage";
import { Route } from "react-router-dom";
import  AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import HomePage from "../../features/home/Homepage";
import Header from "./Header";


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
      <CssBaseline />
       <Header />
       <Container>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/catalog' component={Catalog} />
       <Route path='/catalog/:id' component={ProductDetails} />
       <Route path='/about' component={AboutPage} />
       <Route path='/contact' component={ContactPage} />
       </Container>
    </ThemeProvider>
  );
}

export default App;
