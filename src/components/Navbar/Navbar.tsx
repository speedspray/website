import "./navbar.css"

export default function Navbar() {
  return (
    <nav id="mainNav">
        <div className="nav-wrapper">
            <img src="./img/main-logo.jpeg" alt="Speed Spray Logo" id="mainLogo" />
            <menu id="navLinks">
                <a href="#temp"><li>Contact</li></a>
                <a href="#services"><li>Services</li></a>
                <a href="#about"><li>About</li></a>
            </menu>
        </div>
        <div id="callWrapper" className="nav-wrapper">
            <span className="cta">Call Now!</span>
            <a href="tel:833-988-9274" id="callLink">
                <img src="./icons/phone.svg" alt="Phone Icon" />
                <span>833-988-WASH</span>
            </a>
        </div>
    </nav>
  )
}
