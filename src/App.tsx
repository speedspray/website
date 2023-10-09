import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Reviews from "./components/Reviews/Reviews"
import Services from "./components/Services/Services"
import PastWork from "./components/PastWork/PastWork"
import AboutSection from "./components/AboutSection/AboutSection"
import Footer from "./components/Footer/Footer"
import SalesSection from "./components/SalesSection/SalesSection"

export default function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Reviews />
    <SalesSection />
    <Services />
    <PastWork />
    <AboutSection />
    <Footer />
    </>
  )
}
