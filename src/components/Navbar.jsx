import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link'
import logo from '../uses/logo.png'

const Navbar = () => {
  return (
    <AppBar position='static' color='secondary'>
        <Toolbar>
          <IconButton size='large' edge='start' aria-label='logo' color='inherit' href='/'>  
              <Link href='/'><img src={logo} width='150px'/></Link>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
             <Button><Link href='/' underline='none' color='#fafafa'>Rick & Morty</Link> </Button>
          </Typography>
          <Stack direction='row' spacing={1}>
            <Button><Link href='/characters' underline='none' color='#fafafa'>Characters</Link></Button>
            <Button><Link href='/locations' underline='none' color='#fafafa'>Locations</Link></Button>
            <Button><Link href='/episodes' underline='none' color='#fafafa'>Episodes</Link></Button>
          </Stack>
        </Toolbar>
    </AppBar>

  )
}

export default Navbar