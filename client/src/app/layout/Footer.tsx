import { Container, Grid, Box, Link } from  "@mui/material";

export default function Footer() {

   return ( 
   
      <Box

      style={{backgroundColor: "white", color: "black"}}
      
      px={{xs:3, sm: 10}}
      
      py={{xs:5, sm: 10}}
      
      >
      
      <Container maxWidth="lg">
      
      <Grid container spacing={5}>
      
      <Grid item xs={12} sm={4}>
       
      <Box>
      
      <Link href="/catalog" color="inherit" sx={{textDecoration: 'none', fontWeight: 'bold'}}>
      
      Catalog
      
      </Link>
      
      </Box>
      
      <Box>
      
      <Link href="/contact" color="inherit" sx={{textDecoration: 'none', fontWeight: 'bold'}}>
      
      Contact
      
      </Link>
      
      </Box>
      
      <Box>
      
      <Link href="/about" color="inherit" sx={{textDecoration: 'none',fontWeight: 'bold'}}>
      
      About
      
      </Link>
      
      </Box>


      <Box>
      
      <p className="copyright">2022©</p>

      </Box>
 
      </Grid>
      
      </Grid>
      
      </Container>
         </Box>
   );
}


