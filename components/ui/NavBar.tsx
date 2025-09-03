import ButtonTheme from '../common/NavBar/ButtonTheme'
import Divisor from '../common/Divisor'
import NavigationLinks from '../common/NavBar/NavigationLinks'
import NavBarMobile from '../common/NavBar/NavBarMobile'

export default function NavBar() {
  return (
    <>
      <nav className='hidden fixed top-0 inset-x-0 bg-background/80 backdrop-blur-xl sm:grid grid-cols-3 spacing-x py-5 z-50 transition-colors'>
        <span className='text-2xl font-bold justify-self-start'>Anime App</span>
        <NavigationLinks />
        <ButtonTheme />
        <Divisor />
      </nav>
      <NavBarMobile />
    </>
  )
}
