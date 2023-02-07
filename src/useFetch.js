import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [theData, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const { data } = await axios.get(url)
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { theData, loading }
}

export default useFetch