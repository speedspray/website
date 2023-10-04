import "./services.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Service from "./Service/Service";
import serviceData from "./serviceData";
import { useEffect, useState } from "react";
import DetailsPane from "../DetailsPane/DetailsPane";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1401 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1400, min: 911 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 699, min: 0 },
      items: 1
    }
  };

export default function Services() {

  const [isMobile, setIsMobile] = useState(false)
  const [currentServiceName, setCurrentServiceName] = useState("");
  const [currentServiceDesc, setCurrentServiceDesc] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);

    const serviceElems = serviceData.map((data, i)=>{
        return (<Service
          {...data}
          key={i} 
          setCurrentImg={setCurrentImg}
          setCurrentServiceName={setCurrentServiceName}
          setCurrentServiceDesc={setCurrentServiceDesc}
          setIsDetailsPaneOpen={setIsDetailsPaneOpen}
          />)
    })

    useEffect(()=>{
      if(window.matchMedia("(min-width: 291px) and (max-width: 649px)").matches){
        setIsMobile(true)
      }
    }, [])

  return (
    <>
    <DetailsPane
    img={currentImg}
    name={currentServiceName}
    desc={currentServiceDesc}
    setIsDetailsPaneOpen={setIsDetailsPaneOpen}
    isDetailsPaneOpen={isDetailsPaneOpen}
    />
    <section id="servicesSection">
        <h2 id="servicesTitle">Services</h2>
        <Carousel
        responsive={responsive}
        infinite
        centerMode={isMobile}
        >
            {serviceElems}
        </Carousel>
    </section>
    </>
  )
}
