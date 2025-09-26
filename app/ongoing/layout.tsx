import FormSearch from '@/components/common/Search/FormSearch'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-svh spacing-x pt-24'>
      <h1 className='mb-3 text-2xl font-bold'>What&apos;s On This Season</h1>
      <FormSearch />
      {children}
    </main>
  )
}
