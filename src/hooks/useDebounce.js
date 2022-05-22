import { debounce } from "lodash"
import { useMemo } from "react"

const useDebounce = (handler, delay = 300) => {
  const debouncedChangeHandler = useMemo(() => {
    return debounce(handler, delay)
  }, [])

  return debouncedChangeHandler
}

export default useDebounce
