import * as React from 'react'
import { Link } from './link'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, useTheme } from '@mui/material'
import { useInstitutions } from '../hooks'

export const InstitutionList = ({ imageWidth }) => {
  const institutions = useInstitutions()
  const theme = useTheme()

  const style = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing(4),
      '.image': {
        filter: 'opacity(0.75) saturate(0.5)',
        transition: 'filter 250ms',
        '&:hover': {
          filter: 'opacity(1) saturate(1)',
        }
      },
    },
  }

  return (
    <Box sx={ style.container }>
      {
        institutions.map(( item ) => {
          const logo = getImage(item.image)

          return (
            <Link
              to={ item.link }
              key={ `partner-link-${ item.name }` }
            >
              <GatsbyImage
                className="image"
                image={ logo }
                alt={ item.name }
              />
            </Link>
          )
        })
      }
    </Box>
  )
}
