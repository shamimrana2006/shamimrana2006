import Navebar from "./Navebar"
import Home from "./Home"

import About from './About' 
import Skills from "./Skille"
import Servicess from "./Servicess"
import Portfolio from "./Portfolio"
import ContactMe from "./ContactMe"
import Footer from "./footer"

export default function Protfolio() {
  return (
    <div>
        <Navebar />
        <Home />
        <About />
        <Skills />
        <Servicess />
        <Portfolio />
        <ContactMe />
        <Footer />
    </div>
  )
}
