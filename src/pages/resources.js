import * as React from 'react'
import Seo from '../components/layout/seo'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import { useResources } from '../hooks'

const ResourcesPage = () => {
  const theme = useTheme()
  const resources = useResources()

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
