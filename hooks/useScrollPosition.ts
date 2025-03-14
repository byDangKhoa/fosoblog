import { useMemo } from 'react'
import { usePrevious, useWindowScroll } from 'react-use'

const useScrollPosition = () => {
  const { y } = useWindowScroll()
  const lastScroll = usePrevious(y)

  const direction = useMemo(() => y - (lastScroll || 0), [y])

  return { direction, y }
}

export default useScrollPosition
