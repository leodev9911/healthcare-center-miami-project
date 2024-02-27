import spainFlag from '../assets/spain-flag.png'
import arrowDown from '../assets/arrow-down-blue.svg'
import closeIcon from '../assets/close-icon.svg'
import arrowUp from '../assets/arrow-up.svg'
import { useState } from 'react'

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
            src={closeIcon} 
            alt="Close icon"
            onClick={() => setMobileMenuIsActive(prev => !prev)} 
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <div className='flex items-center justify-between'>
              <a className={`${toggle && 'text-colors-pageBlue font-bold'}`}>Nuestra Compañía</a>
              <img 
                src={toggle ? arrowUp : arrowDown} 
                alt='Arrow up icon'
                onClick={() => setToggle(prev => !prev)} 
              />
            </div>
            {toggle && <div className='flex flex-col gap-3 pl-3 mt-1 text-xs'>
              <a>Moya Medical</a>
              <a>Por qué nosotros</a>
              <a>Ubicación en el mapa</a>
            </div>}
          </div>
          <div>
            <a>Nuestros servicios</a>
          </div>
          <div>
            <a>Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  )
}