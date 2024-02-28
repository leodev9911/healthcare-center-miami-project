import bandAidIcon from '../../assets/band-aid.svg'

export default function HeroSectionTitle({
  heroTitle,
  location,
}) {
  const regexToCheckURL = /\/our-services\/service-\d+/

  return (
    <div className='flex flex-col items-center'>
      {regexToCheckURL.test(location.pathname) === true && <div className="rounded-[50%] bg-colors-pageBlue max-w-[68px] min-w-[68px] h-[68px] flex items-center justify-center">
        <img
          className="w-[40px] h-[40px]"
          src={bandAidIcon}
          alt='Atención de lesiones'
        />
      </div>}
      <h1
        className={`font-extrabold text-5xl lg:text-[60px] ${location.pathname === '/' && 'lg:max-w-[80%]'} leading-[60px] lg:leading-[100px] pb-20 lg:pb-16 pt-5`}
      >
        {heroTitle}
      </h1>
    </div>
  )
}