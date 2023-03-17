import React from 'react'
import Seo from "../components/layout/seo"
import { Box, useTheme } from '@mui/material'
import HomeHero from '../components/home-hero'
import { InstitutionList } from "../components/institution-list"

const IndexPage = () => {
  const theme = useTheme()

  return (
    <>
      <Seo title="Home" />
      
      <HomeHero/>

      <Box sx={{ my: theme.spacing(8) }}>
        <InstitutionList />
      </Box>
    </>
  )
}

export default IndexPage
