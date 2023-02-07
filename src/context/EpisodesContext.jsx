import axios from "axios";
import { createContext, useEffect, useState } from "react";

const EpisodesContext = createContext()

export const EpisodesProvider = ({ children }) => {
    const [episodes, setEpisodes] = useState()
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    const url = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`

    const fetchCharacters = async (episodesUrl) => {
        const { data } = await axios.get(episodesUrl)
        setEpisodes(data.results)
        setLoading(false)
    }

    useEffect(() => {
        fetchCharacters(url)
    }, [pageNumber])

    const previousPage = () => {
        if (pageNumber == 1) {
            setPageNumber(pageNumber - 0)
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    const nextPage = () => {
        if (pageNumber >= 3) {
            setPageNumber(pageNumber + 0)
        } else {
            setPageNumber(pageNumber+ 1)
        }
    }


    return (
        <EpisodesContext.Provider value={{ episodes, loading, pageNumber, nextPage, previousPage }}>
            {children}
        </EpisodesContext.Provider>
    )
}

export default EpisodesContext