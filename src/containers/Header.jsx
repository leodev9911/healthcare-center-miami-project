import NavBar from "../components/NavBar"
import rectangle from "../assets/rectangle.png"
import LinkButton from "../components/LinkButton"


export default function Header({ setMobileMenuIsActive }) {
  return (
    <header className="w-full pb-24 lg:pb-96 relative flex flex-col items-center gap-40">
      <img 
        className="w-full h-full absolute z-0"
        src={rectangle} 
        alt="Hero image" 
      />
      <NavBar setMobileMenuIsActive={setMobileMenuIsActive} />
      <section className="relative z-10 lg:max-w-[80%] flex items-center flex-col text-center text-colors-pageWhite gap-8 px-2">
        <h1 
          className="font-extrabold lg:max-w-[80%] text-4xl leading-10 lg:text-[80px] lg:leading-[100px]"
        >
          Tu bienestar es nuestra prioridad
        </h1>
        <LinkButton text='Contáctanos' />
      </section>
      <section className="relative z-10 max-w-5xl flex items-center gap-[4px] px-2">
        <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full mx-1 cursor-pointer bg-colors-pageBlue"></div>
        <div className="w-2 lg:w-3 h-2 lg:h-3 bg-colors-pageGray rounded-full mx-1 cursor-pointer"></div>
        <div className="w-2 lg:w-3 h-2 lg:h-3 bg-colors-pageGray rounded-full mx-1 cursor-pointer"></div>
      </section>
    </header>
  )
}