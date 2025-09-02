import Link from 'next/link'

export default function NavigationLinks() {
  return (
    <ul className='flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-10'>
      <li><Link href="/" className='text-xl font-semibold sm:text-base sm:font-normal'>Home</Link></li>
      <li><Link href="/animes" className='text-xl font-semibold sm:text-base sm:font-normal'>Animes</Link></li>
      <li><Link href="/ongoing" className='text-xl font-semibold sm:text-base sm:font-normal'>Ongoing</Link></li>
      <li><Link href="/upcoming" className='text-xl font-semibold sm:text-base sm:font-normal'>Upcoming</Link></li>
    </ul>
  )
}
