import { useEffect, useState } from "react"

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState(innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { screenSize };
}