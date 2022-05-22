import { useState, useEffect, useRef } from "react"

const useFetch = (url) => {
  const cache = useRef({})
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)

      if (cache.current[url]) {
        const data = cache.current[url]
        setData(data)
      } else {
        try {
          const response = await fetch(url)
          const data = await response.json()
          cache.current[url] = data
          setData(data)
          setError(null)
        } catch (err) {
          setError(err)
        }
      }

      setLoading(false)
    }

    fetchData()
  }, [url])

  return { loading, data, error }
}

export default useFetch
