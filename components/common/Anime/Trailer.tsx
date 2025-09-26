'use client'

import { useState } from 'react'

export default function Trailer({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <h3 className='text-2xl font-bold mt-2'>Trailer</h3>
      <div className='relative w-full sm:w-2/3 aspect-video rounded-md shadow-lg'>
        <iframe src={url} className={`absolute inset-0 size-full transition-opacity ${isLoading ? 'opacity-0' : 'opacity-100'}`} allow='autoplay; encrypted-media' allowFullScreen onLoad={() => setIsLoading(false)}></iframe>
        {isLoading && <div className='absolute inset-0 bg-gray-500 animate-pulse rounded-md' />}
      </div>
    </>
  )
}
