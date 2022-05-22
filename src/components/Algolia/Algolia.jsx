import React, { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

const Algolia = () => {
  const [query, setQuery] = useState("")
  const [apiData, setApiData] = useState([])

  const url = query && `https://hn.algolia.com/api/v1/search?query=${query}`
  const { loading, data, error } = useFetch(url)

  useEffect(() => {
    if (data && data.hits && data.hits.length) {
      setApiData(data.hits)
    }
  }, [data])

  useEffect(() => {
    if (query === "") {
      setApiData([])
    }
  }, [query])

  return (
    <section>
      <div>
        <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {apiData.length > 0 &&
        !loading &&
        !error &&
        apiData.map((api) => (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "5px 20px",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          >
            <h4>
              Title:{" "}
              <a href={api.url} target="_blank">
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
