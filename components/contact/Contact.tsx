import Section from '@/common/Section'
import Form from './Form'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'
import { Contact } from '@/types'

const Article = ({index, type, value, link}:{index: number, type: string, value: string, link: string}) => (
    <article className='contact__option'>
        {index === 0 ? <MdOutlineEmail /> : index === 1 ? <RiMessengerLine /> : <BsWhatsapp />}
        <h4>{type}</h4>
        <h5>{value}</h5>
        <a href={link} target='_blank'>Send a message</a>
    </article>
)

function Contact({contacts}:{contacts: Contact[]}): JSX.Element {
  return (
    <Section id='contact' first={contacts[0].type} second={contacts[0].value}>
        <div className='contact__options'>
          {contacts.map((contact: Contact, i: number) => <Article key={contact.type} index={i} type={contact.type} value={contact.value} link={contact.link} />)}
        </div>
        <Form />
    </Section>
  )
}

export default Contact