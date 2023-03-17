import * as React from 'react'
import Seo from '../components/layout/seo'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const resources = [
  {
    title: 'Lorem ipsum sed' ,
    description: 'Visit our Github repository to access the latest version of the resources release.',
    url: 'https://github.com/G-FLOAT',
  },
  {
    title: 'Eu ad exercitation' ,
    description: 'Nisi anim amet irure nisi officia dolor aliquip sint nisi reprehenderit. Lorem ipsum incididunt duis anim veniam reprehenderit pariatur reprehenderit in sint ullamco est ut sed ut deserunt id minim.',
    url: 'https://github.com/G-FLOAT',
  },
]

const ResourcesPage = () => {
  const theme = useTheme()
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '30px',
    },
    resource: {
      position: 'relative',
      pl: theme.spacing(4),
      '&:before': {
        content: '""',
        background: theme.palette.text.secondary,
        height: theme.spacing(5),
        width: theme.spacing(0.5),
        position: 'absolute',
        left: 0,
        top: 0,
      }
    },
  }

  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'Resources', path: '/resources' },
  ]

  return (
    <>
      <Seo title="G-FLOAT Resources" />

      <BreadcrumbNav crumbs={ breadcrumbs } title='Resources'/>

      <Container
        maxWidth="lg"
        gap={ 8 }
        component={ Stack }
        sx={ styles.container }
      >
        <Typography variant="h1">Resources</Typography>
        {
          resources.map(item => (
            <Box sx={ styles.resource } key={ item.url }>
              <Typography variant="h2">{ item.title }</Typography>
              <Typography paragraph>{ item.description }</Typography>
              <Button
                variant="contained"
                color="secondary"
                href={ item.url }
              >VIEW</Button>
            </Box>
          ))
        }
      </Container>
    </>
  )
}

export default ResourcesPage
