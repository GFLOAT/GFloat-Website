import * as React from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import Seo from '../components/layout/seo'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useAbout } from '../hooks/use-about'

const AboutPage = () => {
  const { overview, future, status } = useAbout()
  
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'About G-FLOAT', path: '/about' },
  ]

  return (
    <>
      <Seo title="About G-FLOAT" />
      <BreadcrumbNav crumbs={breadcrumbs} />
      <Container maxWidth="lg">
        <Typography variant='h1'>About G-FLOAT</Typography>

        <br />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 6 }}
        >
          <Box sx={{ flex: '1' }}>
            <ReactMarkdown>{ overview }</ReactMarkdown>
          </Box>
          <Box sx={{ flex: '1' }}>
            <ReactMarkdown>{ status }</ReactMarkdown>
            <ReactMarkdown>{ future }</ReactMarkdown>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default AboutPage
