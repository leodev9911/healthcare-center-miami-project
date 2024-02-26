export default function Card({ 
  img,
  imgAlt,
  cardTitle,
  cardDescription 
}) {
  return (
    <div className="card flex flex-col gap-4 items-center py-4 px-2 rounded-br-3xl text-center bg-colors-pageWhite">
      <div className="rounded-[50%] bg-colors-pageBlue w-[77px] h-[77px] flex items-center justify-center">
        <img
          className="w-[46px] h-[46px]" 
          src={img} 
          alt={imgAlt} 
        />
      </div>
      <div className="flex flex-col items-center justify-between flex-grow text-colors-pageGray">
        <h3 className="text-[16px] lg:text-[24px] font-bold w-[122px] lg:w-[214px]">{cardTitle}</h3>
        <p className="w-[122px] lg:w-[214px] text-[12px] lg:text-[18px]">{cardDescription}</p>
      </div>
    </div>
  )
}