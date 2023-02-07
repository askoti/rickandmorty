import { Avatar, AvatarGroup, CircularProgress, Link } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import useFetch from '../useFetch'

const AvatarComponent = ({residents, length}) => {
  return (
    <AvatarGroup total={length} sx={{marginRight: 4, alignContent: 'center', textAlign: 'center', justifyContent: 'center'}}>
      {residents.map(url => {
        const {theData, loading} = useFetch(url) 
        if (loading) {
          return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
        }
        return(
          <Link href={`/characters/${theData?.id}`}><Avatar alt={theData?.name} src={theData?.image}/></Link>
        )
      })}
    </AvatarGroup>
  )
}

export default AvatarComponent