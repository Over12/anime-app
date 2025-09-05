import Link from 'next/link'

export default function NavigationLinks({ toggleMenu }: { toggleMenu?: () => void }) {
  return (
    <ul className='flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-10'>
      <li><Link onClick={toggleMenu} href="/" className='text-xl font-semibold sm:text-base sm:font-normal'>Home</Link></li>
      <li><Link onClick={toggleMenu} href="/animes" className='text-xl font-semibold sm:text-base sm:font-normal'>Animes</Link></li>
      <li><Link onClick={toggleMenu} href="/ongoing" className='text-xl font-semibold sm:text-base sm:font-normal'>Ongoing</Link></li>
      <li><Link onClick={toggleMenu} href="/upcoming" className='text-xl font-semibold sm:text-base sm:font-normal'>Upcoming</Link></li>
    </ul>
  )
}
