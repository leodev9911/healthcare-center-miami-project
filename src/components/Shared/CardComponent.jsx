import { Link, useLocation } from "react-router-dom"

export default function Card({ 
  img,
  imgAlt,
  cardTitle,
  cardDescription,
  slug 
}) {
  const location = useLocation()

  return (
    <Link
      to={`/our-services/service-${slug}`} 
      className={`card flex ${location.pathname === '/' ? 'lg:w-[20%] flex-col px-2' : 'lg:w-auto flex-row justify-around px-6'} lg:flex-col lg:flex-grow gap-4 items-center py-4 rounded-br-3xl text-center bg-colors-pageWhite`}
    >
      <div className="rounded-[50%] bg-colors-pageBlue max-w-[77px] min-w-[77px] h-[77px] flex items-center justify-center">
        <img
          className="w-[46px] h-[46px]" 
          src={img} 
          alt={imgAlt} 
        />
      </div>
      <div className={`flex flex-col items-center justify-between flex-grow`}>
        <h3 className={`"text-[16px] xl:text-2xl font-bold ${location.pathname === '/' ? 'w-[122px]' : 'min-w-[122px]'} lg:w-[90%]`}>{cardTitle}</h3>
        <p className={`${location.pathname === '/' ? 'w-[122px]' : 'min-w-[122px]'} lg:w-[90%] text-[12px] xl:text-xl`}>{cardDescription}</p>
      </div>
    </Link>
  )
}