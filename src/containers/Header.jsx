import rectangle from "../assets/rectangle.png"

export default function Header({ children }) {
  return (
    <header className="w-full relative flex flex-col items-center gap-40">
      <img 
        className="w-full h-full absolute z-0"
        src={rectangle} 
        alt="Hero image" 
      />
      {children}
    </header>
  )
}