import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useFetch from '../useFetch'
import { Link } from '@mui/material';



const EpisodesComponent = ({ theEpisodes }) => {

    return (
        <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Episodes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {theEpisodes.map(episode => {
                    const {theData} = useFetch(episode)

                    return <Typography sx={{padding: 1}}>
                        <Link href={`/episodes/${theData?.id}`} underline='none'>
                            {theData?.episode} • {theData?.name}
                        </Link>
                    </Typography>
                })}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default EpisodesComponent