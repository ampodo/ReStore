import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline} from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


function App() {
  
     const theme = createTheme({
          palette: {
             mode: 'dark',
          
          }

     })

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Header />
       <Container>
       <Catalog />
       </Container>
    </ThemeProvider>
  );
}

export default App;
