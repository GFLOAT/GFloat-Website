import * as React from "react"
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Seo from "../components/layout/seo"
import { usePublications } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'

const ResponsiveStack = ({ children }) => {
  return (
    <Stack 
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 1, md: 2 }}
      gap={ 4 }
    >{ children }</Stack>
  )
}

const Paper = ({ title, citation, url }) => {
  return (
    <Stack alignItems="flex-start" gap={ 1 }>
      <Typography variant="h3">{ title }</Typography>
      <Typography paragraph>{ citation }</Typography>
      <Button
        variant="contained"
        color="secondary"
        href={ url }
      >VIEW</Button>
    </Stack>
  )
}


const Webinar = ({ title, description, date, url }) => {
  const d = new Date(date)
  const dateString = d.toDateString().slice(4,15)

  return (
    <Stack alignItems="flex-start" gap={ 1 }>
      <Typography variant="h3">{ title }</Typography>
      <Typography>{ dateString }</Typography>
      <Typography paragraph>{ description }</Typography>
      <Button
        variant="contained"
        color="secondary"
        href={ url }
      >VIEW</Button>
    </Stack>
  )
}

const PublicationPage = () => {
  const { papers, webinars } = usePublications()

  const styles = {
    title: {
      flex: { sm: '1', md: '1 0 200px' },
      textAlign: { sm: 'left', md: 'right' },
    },
    content: {
      pt: '0.5rem',
      flex: 5
    },
  }
    
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'Publications', path: '/publication' },
  ]

  return (
    <>
      <Seo title="Publications" />
      
      <BreadcrumbNav crumbs={ breadcrumbs } title="Publications" />
      
      <Container>
        <Typography variant="h1" align="center">Publications</Typography>

        <br />

        <ResponsiveStack>
          <Box sx={ styles.title }>
            <Typography variant="h2">Published Papers</Typography>
          </Box>
          <Stack sx={ styles.content } gap={ 8 }>
            { papers.map(item => <Paper key={ item.title } { ...item } />) }
          </Stack>
        </ResponsiveStack>

        <br /><br /><br /><br />

        <ResponsiveStack>
          <Box sx={ styles.title }>
            <Typography variant="h2">Webinars & Seminars</Typography>
          </Box>
          <Stack sx={ styles.content } gap={ 8 }>
            { webinars.map(item => <Webinar key={ item.title } { ...item } />) }
          </Stack>
        </ResponsiveStack>

        <br /><br /><br /><br />

      </Container>
    </>
  )
}

export default PublicationPage
