import axios from "axios";
import { createContext, useEffect, useState } from "react";

const LocationsContext = createContext()

export const LocationsProvider = ({ children }) => {
    const [locations, setLocations] = useState()
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    const url = `https://rickandmortyapi.com/api/location?page=${pageNumber}`

    const fetchLocations = async (locationsUrl) => {
        const { data } = await axios.get(locationsUrl)
        setLocations(data.results)
        setLoading(false)
    }

    useEffect(() => {
        fetchLocations(url)
    }, [pageNumber])

    const previousPage = () => {
        if (pageNumber === 1) {
            setPageNumber(pageNumber - 0)
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    const nextPage = () => {
        if (pageNumber >= 7) {
            setPageNumber(pageNumber + 0)
        } else {
            setPageNumber(pageNumber+ 1)
        }
    }


    return (
        <LocationsContext.Provider value={{ locations, loading, pageNumber, nextPage, previousPage }}>
            {children}
        </LocationsContext.Provider>
    )
}

export default LocationsContext