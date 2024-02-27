import Header from "../containers/Header"
import Footer from "../containers/Footer"
import { useState } from "react"
import MobileMenu from "../containers/MobileMenu"
import NavBar from "../components/Shared/NavBar"
import HomePresentation from "../components/Home/HomePresentation"
import HomeHeaderSlider from "../components/Home/HomeHeaderSlider"
import Main from "../containers/MainSection"
import Home from "../pages/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import OurCompany from "../pages/OurCompany"
import WhyUs from "../pages/WhyUs"
import OurServices from "../pages/OurServices"
import WhereAreWe from "../pages/WhereAreWe"
import { getHeaderBackgroundImageByRoute } from "../logic/getHeaderBackgroundImageByRoute"
import { useGetScreenSize } from "../hooks/useGetScreenSize"
import LinkButton from "../components/Shared/LinkButton"
import HeroSectionTitle from "../components/Shared/HeroSectionTitle"
import { routes } from "./routes"

export default function App() {
  const location = useLocation()
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)
  const { screenSize } = useGetScreenSize()
  const backgroundImage = screenSize > 600
    ? getHeaderBackgroundImageByRoute(location.pathname).desktop
    : getHeaderBackgroundImageByRoute(location.pathname).mobile
  const pageTitle = routes.find(route => location.pathname === route.to).title

  return (
    <>
      {mobileMenuIsActive && <MobileMenu setMobileMenuIsActive={setMobileMenuIsActive} />}
      <Header
        backgroundImage={backgroundImage}
        location={location}
      >
        <NavBar
          setMobileMenuIsActive={setMobileMenuIsActive}
        />
        <HomePresentation>
          <HeroSectionTitle 
            heroTitle={pageTitle}
            location={location} 
          />
          {location.pathname === '/' && <LinkButton text='Contáctanos' />}
        </HomePresentation>
        {location.pathname === '/' && <HomeHeaderSlider />}
      </Header>
      <Main>
        <Routes>
          <Route
            path={routes[0].to}
            element={<Home />}
          />
          <Route
            path={routes[1].to}
            element={<OurCompany />}
          />
          <Route
            path={routes[2].to}
            element={<OurServices />}
          />
          {/* <Route
            path="/our-services/:serviceid"
            element={<OurServices />}
          /> */}
          <Route
            path={routes[3].to}
            element={<WhyUs />}
          />
          <Route
            path={routes[4].to}
            element={<WhereAreWe />}
          />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

