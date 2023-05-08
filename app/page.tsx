import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Nav from '@/components/nav/Nav'
import Portfolio from '@/components/portfolio/Portfolio'
import Services from '@/components/services/Services'
import Testimonials from '@/components/testimonials/Testimonials'

async function getData(){
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '', {headers:{'Cache-Control': 'no-cache'}})
  if(!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Home() {
  const d = await getData()
  return (
    <main>
      <Header name={d[0].title} />
      <Nav />
      <About about={d[0].about} />
      <Experience experience={d[0].experience} />
      <Services services={d[0].services} />
      <Portfolio />
      <Testimonials />
      <Contact contacts={d[0].contacts} />
      <Footer name={d[0].title} />
    </main>
  )
}
