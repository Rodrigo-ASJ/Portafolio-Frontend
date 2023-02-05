import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box>
        
        <Typography variant="h1" color="primary" mb={5}>
            Rodrigo Fernández
        </Typography>

        <Typography variant="body1" color="white" align='left' paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam odio, enim unde itaque quidem rerum molestiae adipisci amet voluptatibus blanditiis accusantium! Ex dolores qui delectus aliquid, beatae ipsum sit autem!
        </Typography>

        <Typography variant="body1" color="white" align='left' gutterBottom>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam odio, enim unde itaque quidem rerum molestiae adipisci amet voluptatibus blanditiis accusantium! Ex dolores qui delectus aliquid, beatae ipsum sit autem!
        </Typography>
        
    </Box>
  )
}

export default Header