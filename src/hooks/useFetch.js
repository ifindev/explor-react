import { useEffect, useRef, useReducer } from "react"
import fetchActions from "../actions/fetchActions"
import fetchReducer from "../reducer/fetchReducer"

const useFetch = (url) => {
  const cache = useRef({})

  const initialState = {
    data: [],
    error: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    let cancelRequest = false
    if (!url) return

    const fetchData = async () => {
      dispatch({ type: fetchActions.FETCHING })

      if (cache.current[url]) {
        const data = cache.current[url]
        dispatch({ type: fetchActions.FETCHED, payload: data })
      } else {
        try {
          const response = await fetch(url)
          const data = await response.json()
          cache.current[url] = data
          if (cancelRequest) return
          dispatch({ type: fetchActions.FETCHED, payload: data })
        } catch (err) {
          if (cancelRequest) return
          dispatch({ type: fetchActions.FETCHED_ERROR, payload: err })
        }
      }
    }

    fetchData()

    // cleanup
    return function cleanup() {
      cancelRequest = true
    }
  }, [url])

  return state
}

export default useFetch
