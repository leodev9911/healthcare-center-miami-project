import spainFlag from '../../assets/spain-flag.png'
import arrowDown from '../../assets/arrow-down.svg'
import hamburguerMenu from '../../assets/hamburguer-menu.svg'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function NavBar({ setMobileMenuIsActive }) {
  return (
    <nav className="w-full lg:max-w-[80%] flex gap-8 items-center justify-between py-8 px-5 z-10 relative">
      <Logo />
      <section className='lg:flex-grow'>
        <div className='hidden text-colors-pageWhite lg:flex items-center justify-between gap-3 text-xs xl:text-base 2xl:text-lg'>
          <Link
            to="/our-company"
            className='cursor-pointer hover:underline duration-300'
          >
            Nuestra Compañía
          </Link>
          <Link
            to="/our-services"
            className='cursor-pointer hover:underline duration-300'
          >
            Nuestros Servicios
          </Link>
          <div className='flex items-center gap-3'>
            <img
              src={spainFlag}
              alt="Spain flag"
            />
            <img
              src={arrowDown}
              alt="Arrow down"
              className='cursor-pointer'
            />
          </div>
          <Link
            to=""
            className='cursor-pointer hover:underline duration-300'
          >
            Contáctanos
          </Link>
          <Link
            to=""
            className='cursor-pointer duration-300 bg-colors-pageWhite p-3 min-w-[176px] max-w-[100%] text-colors-pageBlue rounded-3xl text-center font-bold hover:bg-colors-pageGray hover:text-colors-pageWhite'
          >
            Portal de pacientes
          </Link>
        </div>
        <img
          className='cursor-pointer lg:hidden'
          src={hamburguerMenu}
          alt="Hamburguer menu"
          onClick={() => setMobileMenuIsActive(prev => !prev)}
        />
      </section>
    </nav>
  )
}