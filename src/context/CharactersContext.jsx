import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CharactersContext = createContext()

export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState()
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`

    const fetchCharacters = async (charachtersUrl) => {
        const { data } = await axios.get(charachtersUrl)
        setCharacters(data.results)
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
        if (pageNumber >= 42) {
            setPageNum(pageNumber + 0)
        } else {
            setPageNumber(pageNumber + 1)
        }
    }


    return (
        <CharactersContext.Provider value={{ characters, loading, pageNumber, nextPage, previousPage }}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersContext