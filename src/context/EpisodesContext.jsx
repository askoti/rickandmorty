import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { images } from "../heroData";

const EpisodesContext = createContext()

export const EpisodesProvider = ({ children }) => {
    const [episodes, setEpisodes] = useState()
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [usedImages, setUsedImages] = useState([images[0]]);



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

    const selectRandomImage = async () => {
        let randomIndex = Math.floor(Math.random() * images.length);
        while (usedImages.includes(images[randomIndex])) {
          randomIndex = Math.floor(Math.random() * images.length);
        }
        setSelectedImage(images[randomIndex]);
        setUsedImages([...usedImages, images[randomIndex]]);
    
        if (usedImages.length === images.length) {
          setUsedImages([images[randomIndex]]);
        }   
      };

    useEffect(() => {
        selectRandomImage()
    }, [])


    return (
        <EpisodesContext.Provider value={{ episodes, loading, pageNumber, nextPage, previousPage, selectedImage }}>
            {children}
        </EpisodesContext.Provider>
    )
}

export default EpisodesContext