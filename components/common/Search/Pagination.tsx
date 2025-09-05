'use client'

import { Pagination as PaginationType } from '@/types/ApiResponse'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Pagination({ paginationData }: { paginationData?: PaginationType }) {
  const [currentPage, setCurrentPage] = useState<number | ''>(paginationData?.current_page || 1)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const isSinglePage = paginationData ? paginationData.last_visible_page === 1 : true
  const isFirstPage = currentPage === 1
  const isLastPage = paginationData ? !paginationData.has_next_page : true

  useEffect(() => {
    setCurrentPage(paginationData?.current_page || 1)
  }, [paginationData])

  const onPreviousPage = () => {
    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    if (isFirstPage) return

    const previousPage = currentPage - 1
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', previousPage.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const onNextPage = () => {
    if (isLastPage) return

    const currentPage = parseInt(searchParams.get('page') || '1', 10)
    const nextPage = currentPage + 1
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', nextPage.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value)

    if (isNaN(page)) {
      return
    }

    if (paginationData) {
      if (page < 1) {
        setCurrentPage('')
        return
      }

      if (page > paginationData.last_visible_page) {
        setCurrentPage(paginationData.last_visible_page)
        return
      }
    }

    setCurrentPage(page)
  }

  const onBlurPage = () => {
    if (currentPage === '') {
      setCurrentPage(paginationData?.current_page || 1)
    }
  }

  const onKeyDownPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!paginationData) return
    if (currentPage === paginationData.current_page) return

    if (e.key === 'Enter' && currentPage !== '') {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', currentPage.toString())
      router.push(`${pathname}?${params.toString()}`)
    }
  }

  if (isSinglePage) return null

  return (
    <div className='flex justify-center items-center gap-4 py-10'>
      <button onClick={onPreviousPage} className='cursor-pointer'>
        <IconArrowLeft />
      </button>
      <div>
        <span>Page </span>
        <input type='text' name='page' placeholder={paginationData?.current_page.toString()} value={currentPage.toString()} onKeyDown={onKeyDownPage} onBlur={onBlurPage} onChange={onChangePage} className='focus:outline-none focus:border-accent mx-2 w-10 text-center border-b border-primary' />
        <span> of {paginationData?.last_visible_page}</span>
      </div>
      <button onClick={onNextPage} className='cursor-pointer'>
        <IconArrowRight />
      </button>
    </div>
  )
}
