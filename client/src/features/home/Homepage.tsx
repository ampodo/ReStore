
import { Box, Typography } from  "@mui/material";
import Slider from "react-slick";
import "./homepage.css"

export default function Homepage() {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };


   return (
      
      <>
      <Slider {...settings}>
          <div>
              <img src="/images/main1.jpg" alt="hero" style={{display: 'block', width: '100%',  maxHeight: 500}} />
          </div>
          <div>
              <img src="/images/main2.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
          </div>
          <div>
              <img src="/images/main3.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
          </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{p: 4}} >
          <Typography variant='h3'>Welcome to Academie Cabinet</Typography>
       </Box>
  </>


   )

}
