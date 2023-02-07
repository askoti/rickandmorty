import { Accordion, AccordionDetails, AccordionSummary, Avatar, Badge, Link, Typography } from '@mui/material'
import React from 'react'
import useFetch from '../useFetch'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CharactersComponent = ({characters}) => {
  return (
    <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Characters</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignContent: 'center', textAlign: 'center'}}>
                {characters.map(character => {
                    const {theData} = useFetch(character)

                    return <Typography sx={{padding: 1}}>
                        <Link href={`/characters/${theData?.id}`} underline='none' sx={{padding: 1}}>
                            <Avatar src={theData?.image} alt={theData?.id} sx={{width: 84, height: 84}}/> • {theData?.name.length >= 11 ? theData?.name.substring(0, 10): theData?.name}
                        </Link>
                    </Typography>
                })}
                </AccordionDetails>
            </Accordion>
        </div>
  )
}

export default CharactersComponent