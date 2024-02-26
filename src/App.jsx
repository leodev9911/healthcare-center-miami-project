import Header from "./containers/Header"
import MainSection from "./containers/MainSection"
import Footer from "./containers/Footer"
import { useState } from "react"
import MobileMenu from "./containers/MobileMenu";
import NavBar from "./components/Shared/NavBar";
import HomePresentation from "./components/Home/HomePresentation";
import HomeHeaderSlider from "./components/Home/HomeHeaderSlider";

export default function App() {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

  return (
    <>
      {mobileMenuIsActive && <MobileMenu setMobileMenuIsActive={setMobileMenuIsActive} />}
      <Header>
        <NavBar setMobileMenuIsActive={setMobileMenuIsActive} />
        <HomePresentation />
        <HomeHeaderSlider />
      </Header>
      <MainSection />
      <Footer />
    </>
  )
}

