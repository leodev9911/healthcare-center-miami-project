import rectangle from "../assets/rectangle.png"

export default function Header({ 
  children, 
  backgroundImage, 
  location
 }) {
  return (
    <header className={`w-full relative flex flex-col items-center ${location.pathname === '/' ? 'gap-40' : 'gap-16'}`}>
      <img 
        className="w-full h-full absolute z-0"
        src={rectangle} 
        alt="Hero image" 
      />
      <img 
        className="home-background-img w-full h-full absolute z-[-1]"
        src={backgroundImage} 
        alt="Hero image" 
      />
      {children}
    </header>
  )
}