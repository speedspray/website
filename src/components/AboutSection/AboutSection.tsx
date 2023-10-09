import "./aboutsection.css"
import scrollToEstimateForm from "../../utils/scrollToEstimateForm"

export default function AboutSection() {
  return (
    <section id="aboutSection" className="center">

        <div id="aboutWrapper">
            <h4 id="aboutUsText">About Us</h4>
            <h3 id="aboutUsTitle">SpeedSpray Pressure Washing</h3>
            <p id="aboutUsDesc">Since 2016, SpeedSpray Pressure Washing has had a heart to serve the greater Bay Area with excellence. Our technicians show up with state-of-the-art equipment and a smile on their face. We are dependable, courteous, and highly skilled in our trade. We are setting the bar in our industry, and holding ourselves to a very high standard.
            <br /><br />
SpeedSpray Pressure Washing was established with the specific goal of helping property owners, residential and commercial, protect and preserve their investments from the harsh Texas climate. We offer a wide range of pressure washing services, from gutter cleaning, wood fence cleaning, building cleaning, concrete driveway and walkway cleaning, dumpster pad cleaning, and window cleaning services Just to name a few of the many services we offer.
<br /><br />

Texas weather can prematurely age the appearance and safety of your property.  Property owners replace roofs, siding, fences, and decks, as well as paint far too many times before they even try to revive them.
<br /><br />
We offer every level of convenience to our clients including Free live same-day emailed estimates, paperless online bill pay, text message appointment reminders, and recurring appointments. We believe we are the best value for your home or business, and look forward to the opportunity to serve you. For more information, Please Fill out the form on this page and we will be in touch shortly.</p>

            <div className="center">
                <a id="aboutUsLink" href="#" className="estimate-button" onClick={scrollToEstimateForm}>Get a free estimate!</a>
            </div>
        </div>
        
        <div id="aboutShader"></div>
      <img src="./img/about-bg.jpg" alt="About Background Image" id="aboutBg" />
    </section>
  )
}
