import Card from "../components/Shared/CardComponent"
import file from "../assets/file.svg"
import { routes } from "../routes/routes"

export default function OurServices() {
  const services = Array(12).fill('')
  services.forEach((service, index) => {
    routes.push(
      {
        to: `/our-services/service-${index}`,
        title: 'Atención de lesiones',
      }
    )
  })

  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {services.map((service, index) => {
        return (
          <Card
            key={index}
            img={file}
            imgAlt='Band aid image'
            cardTitle='Atención de lesiones'
            cardDescription='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
            slug={index}
          />
        )
      })}
    </section>
  )
}