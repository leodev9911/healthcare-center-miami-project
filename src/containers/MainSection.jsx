import Card from "../components/CardComponent"
import bandAid from "../assets/band-aid.svg"
import bottle from "../assets/bottle.svg"
import file from "../assets/file.svg"
import firstAidKit from "../assets/first-aid-kit.svg"
import ContactButton from "../components/LinkButton"
import servicesImages from "../assets/services-images.png"

export default function MainSection() {
  return (
    <main className="w-full px-5 max-w-5xl mx-auto my-0 flex flex-col items-centen">
      <section className="relative w-full flex flex-col items-center gap-10 mb-28">
        <div className="flex flex-wrap justify-center gap-5 absolute top-[-44px] lg:top-[-90px]">
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
          <h2 className="text-[20px] mb-4 lg:text-[30px]">Explora todos nuestros servicios</h2>
          <ContactButton text='Ver Más' />
        </div>
      </section>
      <section className="flex flex-wrap gap-8 items-center justify-center">
        <img  className="w-full max-w-[460px]" src={servicesImages} alt="Services image" />
        <div className="flex flex-col items-center text-center mt-10 max-w-[460px]">
          <h2 className="text-3xl font-extrabold mb-4">Servicios DOT</h2>
          <p className="text-lg mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
        </div>
        <ContactButton text='Ver Más' />
      </section>
    </main>
  )
}