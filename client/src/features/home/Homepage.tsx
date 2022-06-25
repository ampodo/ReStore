
import { Box, Typography } from  "@mui/material";
import Slider from "react-slick";
import "./homepage.css"

export default function Homepage() {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      useTransform: false
  };


   return (
      
      <>
      <Slider {...settings}>
          <div>
              <img src="/images/vector.jpg" alt="hero" style={{display: 'block', width: '100%',  maxHeight: 500}} />
          </div>
          <div>
              <img src="/images/lab.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
          </div>
          <div>
              <img src="/images/main3.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
          </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{p: 4}} >
          <Typography variant='h3'>Welcome to Academie Cabinet</Typography>
       </Box>
       <Box display='flex' justifyContent='center' sx={{p: 4, mb:20, mt:-4}} >
          <Typography variant='h6'>Buy online <span className="underlined">Académie Scientifique de Beauté </span>skin treatment and body care products. Schedule appointment at my place for cosmetological procedures.</Typography>
       </Box>
  </>


   )

}


