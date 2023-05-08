import Image from "next/image"
import spinner from '../assets/rings.svg'

export default function Loading() {
    return (
        <div className='loader'>
            <Image height={45} width={45} src={spinner} alt='Loading...' className='loader__img' />
        </div>
    )
}