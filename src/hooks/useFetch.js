import { useState, useEffect, useRef, useReducer } from "react"
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
          dispatch({ type: fetchActions.FETCHED, payload: data })
        } catch (err) {
          dispatch({ type: fetchActions.FETCHED_ERROR, payload: err })
        }
      }
    }

    fetchData()
  }, [url])

  return state
}

export default useFetch
