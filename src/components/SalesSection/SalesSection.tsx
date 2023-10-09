import "./salessection.css"

export default function SalesSection() {
  return (
    <section id="salesSection">
        <h3>*Limited offer</h3>
        <h1>50% Off!</h1>
        <h2>For all new clients</h2>
        <a href="#estimateForm" className="estimate-button">Get a free estimate!</a>

        <div id="salesShader"></div>
      <img src="./img/sales-bg.jpg" alt="Main Background Image" id="salesBg" />
    </section>
  )
}
