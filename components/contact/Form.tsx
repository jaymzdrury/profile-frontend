'use client'
import {FormEvent, useRef} from 'react'
type SubmitEventHandler = (e: FormEvent<HTMLFormElement>) => void

function Form() {

    const form = useRef<HTMLFormElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const message = useRef<HTMLTextAreaElement>(null)

    const submit: SubmitEventHandler = async (e) => {
        try {
            e.preventDefault()
            const data = {
                title: name.current?.value,
                email: email.current?.value,
                msg: message.current?.value
            }
            const res  = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if(res.ok) form.current?.reset()
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <form ref={form} onSubmit={submit}>
            <input ref={name} type='text' name='name' placeholder='Your Full Name' required />
            <input ref={email} type='email' name='email' placeholder='Your Email' required />
            <textarea ref={message} name='message' rows={7} placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    )
}

export default Form