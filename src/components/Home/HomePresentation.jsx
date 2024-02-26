import LinkButton from "../Shared/LinkButton"

export default function HomePresentation() {
  return (
    <section className="relative z-10 lg:max-w-[80%] flex items-center flex-col text-center text-colors-pageWhite gap-8 px-2">
      <h1 
        className="font-extrabold lg:max-w-[80%] text-4xl leading-10 lg:text-[80px] lg:leading-[100px]"
      >
        Tu bienestar es nuestra prioridad
      </h1>
      <LinkButton text='Contáctanos' />
    </section>
  )
}