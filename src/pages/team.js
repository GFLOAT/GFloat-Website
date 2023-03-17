import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/layout/seo'
import { Container, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'
import { useGenericAvatar, useTeam } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useTheme } from '@mui/material/styles'


const TeamPage = () => {
    const theme = useTheme()
    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',

        },
        card: {
            position: 'relative',
            padding: '20px 20px 0px',
            margin: '15px',
            borderRadius: '4px',
            background: 'white',
            display: 'flex',
            boxShadow: ['0px 3px 15px rgba(85, 98, 112, 0.1)', '!important'],
        },
        photo: {
            padding: '20px',
            flex: '0 0 220px'
    
        },
        cardContent: {
            padding: '0px 10px',
            flex: '1'
        },
        teamName: {
            color: theme.palette.text.secondary,
            paddingBottom: '10px',
            fontWeight: '600',
            fontSize: ['1.2rem', '!important'],
            fontFamily: ['Libre Franklin', '!important'],
        },
        teamBio: {
            fontSize: ['0.77rem', '!important'],
            lineHeight: ['1.5', '!important'],
            fontFamily: ['Libre Franklin', '!important'],
        },
    }

    const team = useTeam()
    const genericAvatar = useGenericAvatar()
    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'Our Team', path: '/team' },
    ]
    
    return (
        <>
            <Seo title="G-FLOAT Team" />
            <BreadcrumbNav crumbs={breadcrumbs} title="Our Team"/>
            <Container>
                <Typography variant='h1'>Our Team</Typography>
                <Grid container spacing={2} sx={styles.container}>
                    {team.map(person => {
                        const photo = getImage(person.photo)
                        return (
                            <Grid item xs={12} sm={12} md={12} lg={6} key={person.name}>
                                <Card sx={styles.card}>
                                    <CardMedia sx={styles.photo}>
                                        <GatsbyImage
                                            image={photo ? photo : genericAvatar}
                                            alt={person.name}
                                        />
                                    </CardMedia>
                                    <CardContent sx={styles.cardContent}>
                                        <Typography variant='h2' sx={styles.teamName}>{person.name}</Typography>
                                        <Typography paragraph sx={styles.teamBio}>{person.institution}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default TeamPage
