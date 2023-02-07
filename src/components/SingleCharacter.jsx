import { Accordion, AccordionDetails, AccordionSummary, CircularProgress, Grid, ImageListItem, Link, Paper, Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import LinkComponent from './LinkComponent';
import EpisodesComponent from './EpisodesComponent';

const SingleCharacter = () => {
    const { id } = useParams()
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const {theData, loading} = useFetch(url)

  if (loading) {
   return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
  }else{
    console.log(theData)
  }

  const {name, status, species, image, location, gender, episode} = theData

  return (
    <>
    <Grid container sx={{marginY: 2, justifyContent: 'space-evenly', alignContent: 'center'}} key={name}>
      <Grid item xs={12} md={5}>
        <ImageListItem>
            <img src={image} alt={name} />
        </ImageListItem>
      </Grid>
      <Grid item sx={{alignContent: 'center', marginY: 3, textAlign: 'center'}} xs={12} md={5} columnSpacing={3}>
      <Typography variant='h4'>Name: {name}</Typography>
          <Typography variant='h6'>Specie: {species}</Typography>
          <Typography variant='h6'>Status: {status} <CircleIcon fontSize='small' color={status === 'Alive' ? 'success' : 'error'} style={{marginBottom: '-4px'}}/></Typography>
          <Typography variant='h6'>Gender: {gender}</Typography>
          <LinkComponent locUrl={location.url} locName={location.name}/>
          <br />
          <EpisodesComponent theEpisodes={episode}/>
      </Grid>
    </Grid>
    </>
  )
}

export default SingleCharacter