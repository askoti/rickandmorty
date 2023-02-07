import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import AvatarComponent from './AvatarComponent'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const SingleLocation = () => {
  const { id } = useParams()
  const url = `https://rickandmortyapi.com/api/location/${id}`
  const { theData, loading } = useFetch(url)


  if (loading) {
    return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
  }

  const { name, dimension, type, residents } = theData

  return (
    <Grid container sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 3, marginY: 30}}>
      <Grid item md={6} xs={12} lg={6}>
        <LocationOnIcon sx={{fontSize: 50}}/>
        <Typography variant='h4'>Name: {name}</Typography>
        <Typography variant='h5'>Dimemsion : {dimension}</Typography>
        <Typography variant='subtitle1'>Type: {type}</Typography>
        <br /><br />
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{justifyContent: 'center', alignContent: 'center'}}>
        <PeopleAltIcon sx={{fontSize: 50, color: 'white'}}/>
        <Typography variant='h4'>Residents </Typography>
        <Typography variant='subtitle2'>You can click in image to see character details.</Typography>
        <Box textAlign='center'><AvatarComponent residents={residents} length={residents.length}/></Box>
      </Grid>
    </Grid>
  )
}

export default SingleLocation