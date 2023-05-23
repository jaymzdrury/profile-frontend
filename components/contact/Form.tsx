async function create(formData: FormData){
    'use server'
    const data = {
        title: formData.get('name'),
        email: formData.get('email'),
        msg: formData.get('message')
    }
    try {
        await fetch(`${process.env.NEXT_HOST}/api/data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

function Form(): JSX.Element {
    return (
        <form action={create}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows={7} placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    )
}

export default Form