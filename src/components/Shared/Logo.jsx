import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.png'

export default function Logo() {
  return (
    <Link
      to='/'
      className='w-[248px] h-[43px] lg:w-[20%] lg:h-auto'
    >
      <img 
        className='w-full lg:h-auto'
        src={logoImage} 
        alt="Logo"   
      />
    </Link>
  )
}