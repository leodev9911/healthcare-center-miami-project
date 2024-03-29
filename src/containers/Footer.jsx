import spainFlag from '../assets/spain-flag.png'
import arrowDown from '../assets/arrow-down.svg'
import Logo from '../components/Shared/Logo'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-11 items-center bg-colors-pageFooterBlue py-9 px-2 text-lg ">
      <nav className="w-full max-w-[80%] flex flex-col lg:flex-row gap-6 items-center justify-between px-2 z-30 relative">
        <Logo />
        <section>
          <ul className='text-colors-pageWhite flex flex-col gap-8 lg:flex-row items-center lg:gap-20'>
            <li>
              <Link
                to='/our-company'
                className='cursor-pointer hover:underline duration-300'
              >
                Nuestra Compañía
              </Link>
            </li>
            <li>
              <Link
                to='our-services'
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
                to=''
                className='cursor-pointer hover:underline duration-300'
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <p className='text-colors-pageWhite text-center'>© 2024 Moya Medical. Todos los derechos reservados.</p>
    </footer>
  )
}