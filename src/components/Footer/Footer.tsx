import "./footer.css"

export default function Footer() {
  return (
    <footer id="mainFooter">
        <div id="footerTitle" className="footer-content">
            <span className="title">SpeedSpray Pressure Washing</span>
            <span className="copyright">© All rights reserved</span>
        </div>
        <div className="footer-links-wrapper footer-content">
            <h4>Quicklinks</h4>
            <a className="quicklink" href="#estimateForm">Contact</a>
            <a className="quicklink" href="#reviewSection">Reviews</a>
            <a className="quicklink" href="#servicesSection">Services</a>
        </div>
        <div className="footer-links-wrapper footer-content">
            <h4>Contact</h4>
            <a href="mailto:speedsprayllc@gmail.com" className="contact-link email-contact-link">
                <img src="./icons/email-light.svg" alt="Phone Icon" />
                <span>speedsprayllc@gmail.com</span>
            </a>
            <a href="tel:833-988-9274" className="contact-link">
                <img src="./icons/phone-light.svg" alt="Phone Icon" />
                <span>833-988-WASH</span>
            </a>
        </div>
        
    </footer>
  )
}
