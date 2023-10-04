import { useEffect, useState } from "react"
import "./navbar.css"

export default function Navbar() {
    const [numberText, setNumberText] = useState("833-988-WASH")

    useEffect(()=>{
        if(window.matchMedia("(max-width: 649px)").matches){
            setNumberText("Tap To Call")
        }
    }, [])
    
  return (
    <nav id="mainNav">
        <div className="nav-wrapper">
            <img src="./img/main-logo.jpeg" alt="Speed Spray Logo" id="mainLogo" />
            <menu id="navLinks">
                <a href="#reviewSection"><li>Reviews</li></a>
                <a href="#servicesSection"><li>Services</li></a>
                <a href="#aboutSection"><li>About</li></a>
            </menu>
        </div>
        <div id="callWrapper" className="nav-wrapper">
            <span className="cta">Call Now!</span>
            <a href="tel:833-988-9274" id="callLink">
                <img src="./icons/phone.svg" alt="Phone Icon" />
                <span>{numberText}</span>
            </a>
        </div>
    </nav>
  )
}
