'use client'
import {Dispatch, ReactNode, SetStateAction, useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

const Link = ({id, active, activeSet, children}:{id: string, active: string, activeSet: Dispatch<SetStateAction<string>>, children: ReactNode}) => 
  <a href={id} onClick={() => activeSet(id)} className={active === id ? 'active' : ''}>{children}</a>

function Nav() {
  const [active, activeSet] = useState('#')
  return (
    <nav>
      <Link id='#' active={active} activeSet={activeSet}>
        <AiOutlineHome />
      </Link>
      <Link id='#about' active={active} activeSet={activeSet}>
        <AiOutlineUser />
      </Link>
      <Link id='#experience' active={active} activeSet={activeSet}>
        <BiBook />
      </Link>
      <Link id='#services' active={active} activeSet={activeSet}>
        <RiServiceLine />
      </Link>
      <Link id='#contact' active={active} activeSet={activeSet}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}

export default Nav