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

export default function App() {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)
  const location = useLocation()

  return (
    <>
      {mobileMenuIsActive && <MobileMenu setMobileMenuIsActive={setMobileMenuIsActive} />}
      <Header>
        <NavBar 
          setMobileMenuIsActive={setMobileMenuIsActive} 
        />
        {location.pathname === '/' && <HomePresentation />}
        {location.pathname === '/' && <HomeHeaderSlider />}
      </Header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/our-services"
            element={<OurServices />}
          />
          <Route
            path="/our-services/:serviceid"
            element={<OurServices />}
          />
          <Route
            path="/our-company"
            element={<OurCompany />}
          />
          <Route
            path="/our-company/why-us"
            element={<WhyUs />}
          />
          <Route
            path="/our-company/where-are-we"
            element={<WhereAreWe />}
          />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

