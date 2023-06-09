import {BsLinkedin} from 'react-icons/bs'
import {FaDribbble, FaGithub} from 'react-icons/fa'

function HeaderSocials(): JSX.Element {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithub /></a>
        <a href='https://dribble.com' target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials