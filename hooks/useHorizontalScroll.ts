import { useEffect, useRef, useState } from 'react'

export default function useHorizontalScroll() {
  const carrouselRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState<Boolean>(true)
  const [atEnd, setAtEnd] = useState<Boolean>(false)

  const checkScroll = () => {
    if (!carrouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carrouselRef.current
    setAtStart(scrollLeft <= 0)
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
  }

  useEffect(() => {
    const el = carrouselRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll)
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollLeft = () => {
    if (!carrouselRef.current) return

    const screenWidth = window.innerWidth
    carrouselRef.current?.scrollBy({ left: -screenWidth + 100, behavior: 'smooth' })
  }

  const scrollRight = () => {
    if (!carrouselRef.current) return

    const screenWidth = window.innerWidth
    carrouselRef.current?.scrollBy({ left: screenWidth - 100, behavior: 'smooth' })
  }

  return { carrouselRef, atStart, atEnd, scrollLeft, scrollRight }
}
