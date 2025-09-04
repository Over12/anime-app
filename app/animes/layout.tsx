import FormSearch from '@/components/common/FormSearch'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-svh spacing-x pt-24'>
      <h1 className='mb-3 text-2xl font-bold'>Looking for something specific?</h1>
      <FormSearch />
      {children}
    </main>
  )
}
