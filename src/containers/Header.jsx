import { useLocation } from "react-router"
import rectangle from "../assets/rectangle.png"
import { getHeaderBackgroundImageByRoute } from "../logic/getHeaderBackgroundImageByRoute"
import { useGetScreenSize } from "../hooks/useGetScreenSize"

export default function Header({ children }) {
  const location = useLocation()
  const { screenSize } = useGetScreenSize()
  const backgroundImage = screenSize > 600 
  ? getHeaderBackgroundImageByRoute(location.pathname).desktop 
  : getHeaderBackgroundImageByRoute(location.pathname).mobile 

  return (
    <header className="w-full relative flex flex-col items-center gap-40">
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