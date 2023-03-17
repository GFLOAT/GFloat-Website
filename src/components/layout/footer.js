import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  const theme = useTheme()
  const styles = {
    root: {
      backgroundColor: theme.palette.grey.A700,
      padding: theme.spacing(2),
      color: theme.palette.primary.contrastText,
      display: 'flex',
      justifyContent: 'center'
    },
  }
  
  return (
    <Box sx={ styles.root } component="footer">
      <Typography>
        Copyright &copy; { new Date().getFullYear() } G-FLOAT. All Rights Reserved.
      </Typography>
    </Box>
  )
}


export default Footer
