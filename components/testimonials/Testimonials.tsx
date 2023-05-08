'use client'
import { Fragment } from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './testimonials.css'

const testimonials = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I could not be more impressed with the work that Haija did for my website. Not only was the site beautifully designed, but it was also incredibly functional and user-friendly. Haija was a pleasure to work with.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Working with Haija was an absolute pleasure. She was professional, knowledgeable, and always kept me informed throughout the development process. She was able to take my vision and turn it into a reality, creating a site that functioned flawlessly.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'I was blown away by the quality of work that Haija produced. She was able to create a website that exceeded my expectations in every way. She was incredibly responsive to my needs, always going above and beyond.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'I cannot speak highly enough of this Haijas work. She was able to create a website for my small business that perfectly captured the essence of my brand and helped to grow my customer base. Her attention was truly impressive.'
  }
]

const Article = ({name, review, img}:{name: string, review: string, img: string}) => (
  <Fragment>
    <div className='client__avatar'>
      <img src={img} alt='Avatar One' />
    </div>
    <h5 className='client__name'>{name}</h5>
    <small className='client__review'>{review}</small>
  </Fragment>
)

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}}>
        {testimonials.map(t => <SwiperSlide className='testimonial' key={t.name}><Article name={t.name} img={t.avatar.src} review={t.review} /></SwiperSlide>)}
      </Swiper>
    </section>
  )
}

export default Testimonials