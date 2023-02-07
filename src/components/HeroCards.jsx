import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { heroData } from '../heroData'

const HeroCards = () => {
    return (
        <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
            {heroData.map(({ name, path, description, logo }) => (
                <Grid item lg={4} md={6} sm={12}>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: '50px' }}>{logo}</Typography>
                            <Typography variant='h5'>{name}</Typography>
                            <Typography> {description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button><Link href={path} underline='none'>View {name}</Link></Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default HeroCards