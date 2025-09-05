'use client'

import { IconSearch } from '@tabler/icons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function FormSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const currentSearchParams = useSearchParams()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const searchParams = new URLSearchParams()

    formData.forEach((value, key) => {
      if (value) {
        if (key === 'sfw') {
          searchParams.append(key, 'true')
        } else {
          searchParams.append(key, value.toString())
        }
      }
    })

    const queryString = searchParams.toString()
    const searchURL = queryString ? `/animes?${queryString}` : '/animes'

    if (pathname === '/animes' && queryString !== currentSearchParams.toString()) {
      router.push(searchURL)
    }
  }

  return (
    <form onSubmit={onSubmit} className='mb-5 flex items-center gap-5'>
      <div>
        <input type='text' name='q' placeholder='Search for an anime...' className='focus:outline-none focus:border-accent px-2 py-1 border-b border-primary' />
      </div>
      <div>
        <label htmlFor='type'>Type:</label>
        <select name='type' id='type' className='focus:outline-none focus:border-accent px-2 py-1 bg-background border-b border-primary cursor-pointer ml-2 transition-colors'>
          <option value=''>All</option>
          <option value='tv'>TV</option>
          <option value='movie'>Movie</option>
          <option value='ova'>OVA</option>
          <option value='special'>Special</option>
          <option value='ona'>ONA</option>
          <option value='music'>Music</option>
          <option value='cm'>CM</option>
          <option value='pv'>PV</option>
          <option value='tv_special'>TV Special</option>
        </select>
      </div>
      <div>
        <label htmlFor='rating'>Rating:</label>
        <select name='rating' id='rating' className='focus:outline-none focus:border-accent px-2 py-1 bg-background border-b border-primary cursor-pointer ml-2 transition-colors'>
          <option value=''>All</option>
          <option value='g'>G</option>
          <option value='pg'>PG</option>
          <option value='pg13'>PG-13</option>
          <option value='r17'>R-17+</option>
          <option value='r'>R+</option>
          <option value='rx'>Rx</option>
        </select>
      </div>
      <div className='flex items-center gap-2'>
        <label htmlFor='sfw'>Safe for Work:</label>
        <input type='checkbox' name='sfw' id='sfw' className='accent-primary size-4 focus:outline-none cursor-pointer' />
      </div>
      <button type='submit' className='flex items-center gap-1 px-3 py-2 text-white bg-primary rounded-md cursor-pointer hover:bg-accent transition-colors'>
        <IconSearch className='size-5' />
        Search
      </button>
    </form>
  )
}
