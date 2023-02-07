import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import HeroImage from '../uses/hero.jpeg'
import Title from '../uses/title.png'
import { follow, joinus, unique, welcome } from '../heroData'
import HeroCards from '../components/HeroCards'


const styles = {
    paperContainer: {
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        filter: 'brightness(110%)',
        color: 'white'
    },
    typographyStyle: {
        backgroundColor: 'rgba(0,0,0,.8)',
        color: '#fff',
        padding: '15px',
        textAlign: 'center',
    },
    imgStyle:{
        height: '60%',
        width: '60%',
        objectFit: 'contain',
    }
};

const Hero = () => {
  const matches = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth='100' style={styles.paperContainer}>
            <Typography textAlign='center' style={styles.typographyStyle}><img src={Title} alt="Rick and Morty" style={styles.imgStyle}/></Typography>
            {matches ? <Typography variant='h3' style={styles.typographyStyle} sx={{ fontSize: '36px'}}>{welcome}</Typography> : <Typography variant='h3' style={styles.typographyStyle} sx={{ fontSize: '22px'}}>{welcome}</Typography>}
            {matches ? <Typography variant='h3' style={styles.typographyStyle} sx={{fontSize: '25px'}}>{follow} {unique}</Typography> :  <Typography variant='h3' style={styles.typographyStyle} sx={{fontSize: '19px'}}>{follow} {unique}</Typography>}
            <HeroCards />
            {matches ? <Typography variant='h3' component='div' style={styles.typographyStyle} sx={{fontSize: '22px'}}>{joinus}</Typography> : <Typography variant='h3' component='div' style={styles.typographyStyle} sx={{fontSize: '16px'}}>{joinus}</Typography>}
            <Box textAlign='center'><Button sx={{alignContent: 'center', textAlign: 'center', backgroundColor: '#121212', padding: 2, margin: 1, border: '1px white solid', borderRadius: '7px'}}>Join Us</Button></Box>
          
        </Container>
    )
}

export default Hero