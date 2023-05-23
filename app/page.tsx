import { notFound } from 'next/navigation'

import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Nav from '@/components/nav/Nav'
import Portfolio from '@/components/portfolio/Portfolio'
import Services from '@/components/services/Services'
import Testimonials from '@/components/testimonials/Testimonials'

import { getData } from '@/lib/getData'
import { Data } from '@/types'

export default async function Home(): Promise<JSX.Element> {

  const d: Data[] = await getData()
  if(!d) return notFound()

  return (
    <main>
      <Header name={d[0].name} />
      <Nav />
      <About about={d[0].about} />
      <Experience experience={d[0].experience} />
      <Services services={d[0].services} />
      <Portfolio />
      <Testimonials />
      <Contact contacts={d[0].contacts} />
      <Footer name={d[0].name} />
    </main>
  )
}
