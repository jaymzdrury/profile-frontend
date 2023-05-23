import { Fragment } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'
import Section from '@/common/Section';
import { Experience, Dev } from '@/types';

const Article = ({title, level}:{title: string, level: string}) => (
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
      <h4>{title}</h4>
      <small className='text-light'>{level}</small>
    </div>
  </article>
)

const DevComponent = ({title, info}: {title: string, info: Dev[]}) => (
  <Fragment>
    <h3>{title}</h3>
    <div className='experience__content'>
      {info.map(tech => (
        <Article key={tech.title} title={tech.title} level={tech.level} />
      ))}
    </div>
  </Fragment>
)

function Experience({experience}:{experience: Experience}): JSX.Element {
  return (
    <Section id='experience' first='What Skills I Have' second='My Experience'>
      <div className="experience__frontend">
        <DevComponent title='Frontend Development' info={experience.frontend} />
      </div>
      <div className='experience__backend'>
        <DevComponent title='Backend Development' info={experience.backend} />
      </div>
    </Section>
  )
}

export default Experience