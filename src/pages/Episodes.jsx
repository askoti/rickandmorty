import { Box, Button, ButtonGroup, CircularProgress, Grid, ImageList, ImageListItem, ImageListItemBar, Link, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import EpisodesContext from '../context/EpisodesContext'
import rickandmorty from '../uses/rick_morty.jpeg'

const Episodes = () => {
  const { episodes, loading, pageNumber, nextPage, previousPage } = useContext(EpisodesContext)

  if (loading) {
    return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
  }

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems="center" sm={12}>
        <ImageList
          sx={{
            transform: 'translateZ(0)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            padding: 4

          }}
          rowHeight={'auto'}
          gap={25}
        >
          <Grid item display='flex' flexWrap={'wrap'} justifyContent='space-evenly' padding={6} gap={5}>
            {episodes.map(({ id, name, episode }) => {
              return (
                <Link href={`/episodes/${id}`}>
                  <ImageListItem key={id}>
                    <img
                      src={rickandmorty}
                      alt={name}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                      }}
                      title={`${episode} • ${name}`}
                      position="top"
                    />
                  </ImageListItem>
                </Link>
              );
            })}
          </Grid>
        </ImageList>
      </Grid>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin='10px'
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

export default Episodes