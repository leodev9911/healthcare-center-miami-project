import Card from "../components/Shared/CardComponent"
import bandAid from "../assets/band-aid.svg"
import bottle from "../assets/bottle.svg"
import file from "../assets/file.svg"
import firstAidKit from "../assets/first-aid-kit.svg"
import ContactButton from "../components/Shared/LinkButton"
import servicesImages from "../assets/services-images.png"

export default function MainSection() {
  return (
    <main className="w-full px-5 lg:max-w-[80%] mx-auto my-0 flex flex-col items-centenr">
      <section className="relative w-full flex flex-col items-center gap-10 mb-28">
        <div className="flex w-full flex-wrap justify-center lg:justify-between gap-5 absolute top-[-44px] lg:top-[-90px]">
          <Card 
            img={bandAid}
            imgAlt='Band aid image'
            cardTitle='Atención de lesiones'
            cardDescription='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
          />
          <Card 
            img={bottle}
            imgAlt='Bottle image'
            cardTitle='Pruebas de drogas y alcohol'
            cardDescription='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
          />
          <Card 
            img={file}
            imgAlt='File image'
            cardTitle='Exámenes físicos'
            cardDescription='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
          />
          <Card 
            img={firstAidKit}
            imgAlt='First Aid Kit image'
            cardTitle='Medicina preventiva'
            cardDescription='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
          />
        </div>
        <div className="flex flex-col items-center pt-[600px] sm:pt-[290px] text-center">
          <h2 className="text-xl mb-4 lg:text-3xl 2xl:text-5xl text-colors-pageGray">Explora todos nuestros servicios</h2>
          <ContactButton text='Ver Más' />
        </div>
      </section>
      <section className="flex flex-col gap-8 items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between flex-grow gap-8">
          <img  className="w-[50%] h-auto flex-grow" src={servicesImages} alt="Services image" />
          <div className="w-[50%] flex flex-col items-center text-center mt-10 flex-grow">
            <h2 className="text-3xl xl:text-5xl font-extrabold mb-4 text-colors-pageGray">Servicios DOT</h2>
            <p className="text-lg xl:text-2xl mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
          </div>
        </div>
        <ContactButton text='Ver Más' />
      </section>
    </main>
  )
}