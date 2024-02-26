import logoImage from '../../assets/logo.png'

export default function Logo() {
  return (
    <img 
      className='w-[248px] h-[43px] lg:w-[20%] lg:h-auto'
      src={logoImage} 
      alt="Logo"   
    />
  )
}