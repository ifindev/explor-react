import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
        setError(null)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { loading, data, error }
}

export default useFetch
