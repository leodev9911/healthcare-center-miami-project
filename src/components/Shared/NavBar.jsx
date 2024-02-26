import spainFlag from '../../assets/spain-flag.png'
import arrowDown from '../../assets/arrow-down.svg'
import hamburguerMenu from '../../assets/hamburguer-menu.svg'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function NavBar({ setMobileMenuIsActive }) {
  return (
    <nav className="w-full lg:max-w-[80%] flex gap-8 items-center justify-between py-8 px-5 z-10 relative">
      <Logo />
      <section>
        <ul className='hidden text-colors-pageWhite lg:flex items-center gap-20 text-lg'>
          <li>
            <Link 
              to="/our-company"
              className='cursor-pointer hover:underline duration-300'
            >
              Nuestra Compañía
            </Link>
          </li>
          <li>
            <Link 
              to="/our-services"
              className='cursor-pointer hover:underline duration-300'
            >
              Nuestros Servicios
            </Link>
          </li>
          <li className='flex items-center gap-3'>
            <img 
              src={spainFlag} 
              alt="Spain flag" 
            />
            <img 
              src={arrowDown} 
              alt="Arrow down"
              className='cursor-pointer' 
            />
          </li>
          <li>
            <Link 
              to=""
              className='cursor-pointer hover:underline duration-300'
            >
              Contáctanos
            </Link>
          </li>
        </ul>
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