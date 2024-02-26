import logoImage from '../assets/logo.png'
import spainFlag from '../assets/spain-flag.png'
import arrowDown from '../assets/arrow-down.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-11 items-center bg-colors-pageFooterBlue py-9 mt-[160px]">
      <nav className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 items-center justify-between px-2 z-30 relative">
        <img 
          className='w-[248px] h-[43px]'
          src={logoImage} 
          alt="Logo"   
        />
        <section>
          <ul className='text-colors-pageWhite flex flex-col gap-8 lg:flex-row items-center lg:gap-20'>
            <li>
              <a 
                href=""
                className='cursor-pointer hover:underline duration-300'
              >
                Nuestra Compañía
              </a>
            </li>
            <li>
              <a 
                href=""
                className='cursor-pointer hover:underline duration-300'
              >
                Nuestros Servicios
              </a>
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
              <a 
                href=""
                className='cursor-pointer hover:underline duration-300'
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <p className='text-colors-pageWhite'>© 2024 Moya Medical. Todos los derechos reservados.</p>
    </footer>
  )
}