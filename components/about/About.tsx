import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'
import Section from '@/common/Section'
import { About } from '@/common/types'
import './about.css'

const Article = ({index, title, desc}:{index: number, title: string, desc: string}) => (
  <article className='about__card'>
    {index === 0 ? <FaAward className='about__icon' /> : index === 1 ? <FiUsers className='about__icon' /> : <VscFolderLibrary className='about__icon' />}
    <h5>{title}</h5>
    <small>{desc}</small>
  </article>
)

function About({about}:{about: About}) {
  return (
    <Section id='about' first='Get to Know' second='About Me'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME.src} alt='About Image' />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          {about.facts.map((fact, i) => <Article key={fact.title} index={i} title={fact.title} desc={fact.desc} />)}
        </div>
        <p>
          {about.desc}
        </p>
        <a href='#contact' className='btn btn-primary'>Let&apos;s Talk</a>
      </div>
    </Section>
  )
}

export default About