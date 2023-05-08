import Section from "@/common/Section"
import { BiCheck } from "react-icons/bi"
import './services.css'
import { Services } from "@/common/types"

const Article = ({title, services}:{title: string, services: string[]}) => (
  <article className="service">
    <div className="service__head">
      <h3>{title}</h3>
    </div> 
    <ul className="service__list">
      {services.map(s => 
        <li key={s}>
          <BiCheck className="service__list-icon" />
          <p>{s}</p>
        </li>
      )}
    </ul> 
  </article>
)

function Services({services}:{services: Services[]}) {
  return (
    <Section id='services' first="What I Offer" second="Services">
      {services.map(s => <Article key={s.title} title={s.title} services={s.services} />)}
    </Section>
  )
}

export default Services