import spainFlag from '../assets/spain-flag.png'
import arrowDown from '../assets/arrow-down-blue.svg'
import closeIcon from '../assets/close-icon.svg'
import arrowUp from '../assets/arrow-up.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes/routes'

export default function MobileMenu({ setMobileMenuIsActive }) {
  const [toggle, setToggle] = useState(false)

  return (
    <section className='flex fixed z-30 w-full h-screen top-0 bottom-0 left-0 right-0 bg-colors-pageWhite'>
      <div className='w-[20%] bg-colors-pageGray' />
      <div className='w-[80%] px-8 py-11'>
        <div className='flex justify-between items-center mb-8'>
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
          <img
            className='cursor-pointer' 
            src={closeIcon} 
            alt="Close icon"
            onClick={() => setMobileMenuIsActive(prev => !prev)} 
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <div 
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setToggle(prev => !prev)}
            >
              <p
                className={`${toggle && 'text-colors-pageBlue font-bold'}`}
              >
                  Nuestra Compañía
              </p>
              <img 
                src={toggle ? arrowUp : arrowDown} 
                alt='Arrow up icon' 
              />
            </div>
            {toggle && <div className='flex flex-col gap-3 pl-3 mt-1 text-xs'>
              <Link
                to={routes[1].to}
                onClick={() => setMobileMenuIsActive(prev => !prev)}
              >
                Moya Medical
              </Link>
              <Link
                to={routes[3].to}
                onClick={() => setMobileMenuIsActive(prev => !prev)}
              >
                Por qué nosotros
              </Link>
              <Link
                to={routes[4].to}
                onClick={() => setMobileMenuIsActive(prev => !prev)}
              >
                Ubicación en el mapa
              </Link>
            </div>}
          </div>
          <div>
            <Link
              to={routes[2].to}
              onClick={() => setMobileMenuIsActive(prev => !prev)}
            >
              Nuestros servicios
            </Link>
          </div>
          <div>
            <Link>
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}