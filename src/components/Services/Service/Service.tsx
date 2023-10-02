import "./service.css"

interface ServicePropType extends ServiceType{

}

export default function Service(props: ServicePropType) {
  return (
    <aside className="service">
        <img className="service-img" src={props.imgSrc} alt={`Image of ${props.title}`} />
        <h3 className="service-title">{props.title}</h3>
        <p className="service-desc">{props.shortDesc}</p>

        <button className="service-cta">Click For More</button>
    </aside>
  )
}
