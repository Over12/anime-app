'use client'

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className='flex flex-col h-svh justify-center items-center text-center px-4'>
      <h1 className='text-3xl font-bold'>Oops! Something went wrong!</h1>
      <p className='mt-1 text-base sm:text-lg italic'>{error.message}</p>
      <a href="/" className="mt-6 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition">
        Take me back
      </a>
    </main>
  )
}
