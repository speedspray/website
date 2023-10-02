import "./service.css"

interface ServicePropType extends ServiceType{
  setCurrentServiceName: any,
  setCurrentServiceDesc: any
  setCurrentImg: any
  setIsDetailsPaneOpen: any
}



export default function Service(props: ServicePropType) {

  function triggerDetailsPane(){
    props.setCurrentServiceDesc(props.desc)
    props.setCurrentServiceName(props.title)
    props.setCurrentImg(props.imgSrc)
    props.setIsDetailsPaneOpen(true)
  }
  return (
    <aside className="service">
        <img className="service-img" src={props.imgSrc} alt={`Image of ${props.title}`} />
        <h3 className="service-title">{props.title}</h3>
        <p className="service-desc">{props.shortDesc}</p>

        <button onClick={triggerDetailsPane} className="service-cta">Click For More</button>
    </aside>
  )
}
