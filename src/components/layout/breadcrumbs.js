import React from "react"
import { Link } from '../link'
import { Box, Typography, Breadcrumbs }  from '@mui/material'
import { useTheme } from '@mui/material/styles'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadcrumbNav = ({ crumbs, title }) => {
  const theme = useTheme()

  const styles = {
    root: {
      mt: '6px',
      mb: theme.spacing(5),
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: theme.palette.grey.A100,
      px: theme.spacing(5),
      pt: theme.spacing(1),
      pb: theme.spacing(0),
    },
    crumb: {
      color: theme.palette.text.secondary,
      textDecoration: 'none',
    },
    finalCrumb: {
      color: theme.palette.text.primary,
    },
}

  return (
      <>
        <Box role="presentation" onClick={ handleClick } sx={ styles.root }>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={ styles.container }
          >
            {
              crumbs.map(({ text, path }, i) => {
                if (i + 1 === crumbs.length) {
                  return (
                    <Typography
                      key={ path }
                      sx={ styles.finalCrumb }
                    >{ text }</Typography>
                  )
                }
                return (
                  <Box 
                    key={ path }
                    component={ Link }
                    to={ path } 
                    sx={ styles.crumb }
                  >{ text }</Box>
                )
              })
            }
          </Breadcrumbs>

        </Box>
      </>
    )
}


export default BreadcrumbNav
