import { CircularProgress, Link, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import useFetch from '../useFetch'

const LinkComponent = ({locUrl}) => {
    const {theData, loading} = useFetch(locUrl)

    if (loading) {
        return <Stack alignItems='center' marginTop={50}><CircularProgress /></Stack>
    }
  return (
    <Typography variant='h6'>Location: <Link href={`/locations/${theData?.id}`} underline='none'>{theData?.name}</Link> </Typography>
  )
}

export default LinkComponent