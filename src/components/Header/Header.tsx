import "./header.css"

export default function Header() {
  return (
    <header id="mainHeader">
      {/* HEADER INFO */}
      <div className="header-content-wrapper">
        <div id="mainHeading">SpeedSpray</div>
        <div id="secondaryHeading">Pressure Washing</div>

        <div id="subHeading">Get it done right, Professional Results Guaranteed!</div>

        <img src="./img/licensed-logo.png" alt="licensed badge" id="licensedBadge" />

        <div id="servingArea">Serving a 20-mile radius from <a target="_blank" href="https://maps.app.goo.gl/Z3hW8qyQECqy8ru29">77539</a></div>
      </div>
      
      {/* FORM */}
      <div className="header-content-wrapper">

      </div>

      <div id="headerShader"></div>
      <img src="./img/main-bg.jpg" alt="Main Background Image" id="mainBg" />
    </header>
  )
}
