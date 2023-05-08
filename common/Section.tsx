import { ReactNode } from 'react'

function Section({id, first, second, children}:{id:string, first: string, second: string, children: ReactNode}) {
  return (
    <section id={id}>
        <h5>{first}</h5>
        <h2>{second}</h2>
        <div className={`container ${id}__container`}>
          {children}
        </div> 
    </section>
  )
}

export default Section