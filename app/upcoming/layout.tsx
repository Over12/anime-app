import FormSearch from '@/components/common/Search/FormSearch'
import { Suspense } from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-svh spacing-x pt-24'>
      <h1 className='mb-3 text-2xl font-bold'>Anime to look forward to</h1>
      <Suspense>
        <FormSearch />
      </Suspense>
      {children}
    </main>
  )
};
