import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col h-svh justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-base sm:text-lg">
        This page is missing... just like your favorite anime&apos;s next season.
      </p>
      <p className="mt-1 text-xs sm:text-sm italic">
        (Is this canon... or just filler?)
      </p>
      <Link href="/" className="mt-6 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition">
        Take me back
      </Link>
    </main>
  )
}