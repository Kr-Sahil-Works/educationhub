import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Courses from "./components/courses"
import Reviews from "./components/reviews"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Background from "./components/background"
import GoToTop from "./components/gototop"
import WhatsAppBtn from "./components/whatsapp"


export default function App() {
  return (
    <>

    <Background/>
    
      <Navbar />
      <Hero />
      <Courses />
      <Reviews />
      <Contact />
      <Footer />

<WhatsAppBtn/>
<GoToTop/>
    </>
  )
}