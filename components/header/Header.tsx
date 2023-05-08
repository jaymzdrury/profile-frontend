import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

function Header({name}:{name: string}) {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I&apos;m</h5>
            <h1>{name}</h1>
            <h5 className="text-light">Fullstack developer</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
              <img src={ME.src} alt='me' />
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header