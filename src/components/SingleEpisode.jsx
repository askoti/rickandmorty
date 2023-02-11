import { CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EpisodesContext from '../context/EpisodesContext'
import useFetch from '../useFetch'
import CharactersComponent from './CharactersComponent'

const SingleEpisode = () => {
  const { id } = useParams()
  const {selectedImage} = useContext(EpisodesContext)
  const url = `https://rickandmortyapi.com/api/episode/${id}`
  const { theData, loading } = useFetch(url)

  const styles = {
    imgStyle: {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    }
  }

  if (loading) {
    return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
  }

  const { episode, name, air_date, characters } = theData

  return (
    <Grid container sx={{ justifyContent: 'space-around' }}>
      <Grid item xs={12} lg={6} md={6}>
        <img src={selectedImage} alt="" style={styles.imgStyle} />
      </Grid>
      <Grid item xs={12} lg={6} md={6} sx={{ textAlign: 'center', marginY: 10, padding: 3 }}>
        <Typography variant='h4'>{episode} • {name}</Typography>
        <Typography variant='h6'>Air Date: {air_date}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginY: 3 }}>
        <CharactersComponent characters={characters} />
      </Grid>
    </Grid>
  )
}

export default SingleEpisode