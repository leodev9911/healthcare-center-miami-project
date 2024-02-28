import mapExample from '../assets/map.png'
import locationIcon from '../assets/carbon-location.svg'
import mailOutline from '../assets/mail-outline.svg'
import outlinePhone from '../assets/outline-phone.svg'
import webIcon from '../assets/web.svg'

export default function WhereAreWe() {
  return (
    <section className="flex flex-col gap-7">
      <div className="flex flex-col gap-24">
        <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between flex-grow gap-8">
          <div className="lg:w-[50%] flex flex-col items-start flex-grow gap-3">
            <h3
              className="text-2xl lg:text-5xl font-extrabold text-colors-pageBlue text-center self-center mb-3"
            >
              Contáctanos
            </h3>
            <div className="flex gap-3 items-start">
              <img
                className='w-6 h-6'
                src={locationIcon}
                alt="Location icon"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <img
                className='w-6 h-6'
                src={outlinePhone}
                alt="Phone icon"
              />
              <p>
                (305) 888-6959
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <img
                className='w-6 h-6'
                src={mailOutline}
                alt="Mail icon"
              />
              <a
                className='underline text-colors-pageBlue cursor-pointer'
                href='#'
              >
                moyamedical@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <img
                className='w-6 h-6'
                src={webIcon}
                alt="Web icon"
              />
              <a
                className='underline text-colors-pageBlue cursor-pointer'
                href='#'
              >
                www.moyamedical.com
              </a>
            </div>
          </div>
          <img className="lg:w-[50%] h-auto" src={mapExample} alt="Services image" />
        </div>
      </div>
    </section>
  )
}
