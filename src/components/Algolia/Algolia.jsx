import React, { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import useDebounce from "../../hooks/useDebounce"

const Algolia = () => {
  const [query, setQuery] = useState("")
  const [apiData, setApiData] = useState([])

  const url = query && `https://hn.algolia.com/api/v1/search?query=${query}`
  const { loading, data, error } = useFetch(url)

  useEffect(() => {
    if (data && data.hits && data.hits.length) {
      setApiData(data.hits)
    }

    if (query === "") {
      setApiData([])
    }
  }, [data, query])

  const handleQueryChange = (e) => setQuery(e.target.value)
  const debouncedChangeHandler = useDebounce(handleQueryChange, 500)

  return (
    <section>
      <div>
        <input type="text" onChange={debouncedChangeHandler} />
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {apiData.length > 0 &&
        !loading &&
        !error &&
        apiData.map((api, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#fff",
              padding: "5px 20px",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          >
            <h4>
              Title:{" "}
              <a href={api.url} target="_blank" rel="noreferrer">
                {api.title}
              </a>
            </h4>
            <h4>Author : {api.author}</h4>
          </div>
        ))}
      {apiData.length === 0 && !loading && (
        <h2>No data... Search something to get data from the web!</h2>
      )}
    </section>
  )
}

export default Algolia
