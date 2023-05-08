import Section from '@/common/Section'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'
import Image from 'next/image'

const work = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://public.datapine.com/#board/DnjvEBVsJRVZteO3gGbSWA'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://public.datapine.com/?_ga=2.134565681.1724609503.1682608892-1769707870.1682608892#board/2iCxG0lBg8Hfnx4h6OuhH'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://www.figma.com/file/f40rQv8rqS8mA8qcrcV8b4/Product-Development-Roadmap-Template-(Copy)?node-id=0-1&t=DzPfdXUlePGjDoqO-0'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://webflow.com/made-in-webflow/website/Basic-Task-Manager-Demo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://public.datapine.com/?_ga=2.134565681.1724609503.1682608892-1769707870.1682608892#board/2iCxG0lBg8Hfnx4h6OuhH'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://public.datapine.com/#board/DnjvEBVsJRVZteO3gGbSWA'
  }
]

const Article = ({img, title, github, dribble}:{img: string, title: string, github: string, dribble: string}) => (
  <article className='portfolio__item'>
    <div className='portfolio__item-image'>
      <img src={img} alt='' />
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={dribble} className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
    </div>
  </article>
)

function Portfolio() {
  return (
    <Section id='portfolio' first='My Recent Work' second='Portfolio'>
      {work.map(w => <Article key={w.id} img={w.image.src} title={w.title} github={w.github} dribble={w.demo} />)}
    </Section>
  )
}

export default Portfolio