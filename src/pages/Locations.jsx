import { Button, ButtonGroup, Card, CardActions, CardContent, CircularProgress, Grid, Link, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import LocationsContext from '../context/LocationsContext'

const Locations = () => {
  const { locations, loading, pageNumber, nextPage, previousPage } = useContext(LocationsContext)

  if (loading) {
    return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
  }

  return (
    <>
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems='center'>
        {locations.map(({id, name, type, dimension}) => (
          <Card sx={{ width: 325, margin: 5, padding: 2 }} key={id}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {id}
              </Typography>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {type}
              </Typography>
              <Typography variant="body2">
                {dimension}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link href={`locations/${id}`} underline='none'>See Residents</Link></Button>
            </CardActions>
        </Card>
        ))}
      </Grid>
      <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin='15px'
            >
                <ButtonGroup variant="outlined" aria-label="pages" size='large' color='primary'>
                    <Button onClick={() => previousPage()}>Previous</Button>
                    <Button disabled>{pageNumber}</Button>
                    <Button onClick={() => nextPage()}>Next</Button>
                </ButtonGroup>
        </Box>  
    </>

  )
}

export default Locations