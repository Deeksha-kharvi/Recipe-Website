import { Box, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import About from './About';
import AboutContent from '../Components/AboutContent';
import { ForkRight, RampRight } from '@mui/icons-material';


export default function Home() {
  return (
    <Box>
      
      <Box
        sx={{
          backgroundImage: 'url(https://t4.ftcdn.net/jpg/08/62/68/81/240_F_862688196_8tEt5F5nIyP245uUPoiQrUBrIxoZvfii.jpg)',
         
          backgroundSize: 'cover', 
          flexDirection: 'column',
           textShadow: '15px 15px 8px rgba(0, 0, 0, 0.7)', 
           alignItems: 'flex-start',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          height: '80vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          color: 'grey', 
          fontSize: '30px', 
          textShadow: '5px 5px 8px rgba(0, 0, 0, 0.7)', 
          paddingLeft: '2rem', 
        }}
      ><Box>
       <Typography variant="h2" color="white" sx={{fontFamily: 'ui-serif'}}>Family Favourite  </Typography> 
       </Box>
       <br/>
       <Typography variant="h2" color="white" sx={{ mt: 0,fontFamily: 'ui-serif' }}>Recipes</Typography>
      </Box>
      <Box sx={{p:5}}>
     <AboutContent/>
     </Box>
    
    </Box>
  );
}
