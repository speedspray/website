import "./aboutsection.css"

export default function AboutSection() {
  return (
    <section id="aboutSection" className="center">

        <div id="aboutWrapper">
            <h4 id="aboutUsText">About Us</h4>
            <h3 id="aboutUsTitle">SpeedSpray Pressure Washing</h3>
            <p id="aboutUsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="center">
                <a id="aboutUsLink" href="#estimateFormTitle" className="estimate-button">Get a free estimate!</a>
            </div>
        </div>
        
        <div id="aboutShader"></div>
      <img src="./img/about-bg.jpg" alt="About Background Image" id="aboutBg" />
    </section>
  )
}
