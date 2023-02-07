import { Button, ButtonBase, ButtonGroup, CircularProgress, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CharactersContext from '../context/CharactersContext'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';


const Characters = () => {
    const { characters, loading, pageNumber, nextPage, previousPage } = useContext(CharactersContext)

    if (loading) {
        return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    return (
        <>
        <Grid container spacing={1} direction="row" justifyContent="center" alignItems='center'>
            {characters.map(({ image, name, status, id, species }) => (

                <Link href={`/characters/${id}`} key={id} underline='none'>
                    <Paper
                        sx={{
                            p: 3,
                            margin: '15px',
                            width: 400,
                            flexGrow: 1,
                            marginTop: '30px',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                        elevation={3}
                    >
                        <Grid container spacing={2} marginBottom='25px' padding='10px'>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <Img alt="PFP" src={image} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm container>
                                <Grid item xs container direction="column" spacing={1}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Name: {name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Specie: {species}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Status: {status} <CircleIcon fontSize='small' color={status === 'Alive' ? 'success' : 'error'} style={{marginBottom: '-5px'}}/>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Link>
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

export default Characters