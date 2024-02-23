import Header from "./containers/Header"
import MainSection from "./containers/MainSection"
import Footer from "./containers/Footer"
import { useState } from "react"
import MobileMenu from "./containers/MobileMenu";

export default function App() {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

  return (
    <>
      {mobileMenuIsActive && <MobileMenu setMobileMenuIsActive={setMobileMenuIsActive} />}
      <Header setMobileMenuIsActive={setMobileMenuIsActive} />
      <MainSection />
      <Footer />
    </>
  )
}

