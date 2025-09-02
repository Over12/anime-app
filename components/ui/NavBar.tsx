import ButtonTheme from '../common/ButtonTheme'
import Divisor from '../common/Divisor'

export default function NavBar() {
  return (
    <>
      <nav className='fixed inset-x-0 bg-background/80 backdrop-blur-xl grid grid-cols-3 spacing-x py-5 z-50 transition-colors'>
        <span className='text-2xl font-bold justify-self-start'>Anime App</span>
        <ul className='flex justify-center items-center gap-10'>
          <li>Home</li>
          <li>Animes</li>
          <li>Ongoing</li>
          <li>Upcoming</li>
        </ul>
        <ButtonTheme />
        <Divisor />
      </nav>
    </>
  )
}
