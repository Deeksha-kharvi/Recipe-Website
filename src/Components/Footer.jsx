import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box
    
      sx={{
        backgroundColor: '#D7CCC8', 
        color: '#5D4037', 
        textAlign: 'center',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        top:100,
        width: '100%',
        
        minHeight: '60px',
        border: '2px solid black',
        }}
    >
      <Typography variant="body2" fontSize="20px">
        Family Recipe @ 2024 Recipe Website
      </Typography>
    </Box>
  );
}
