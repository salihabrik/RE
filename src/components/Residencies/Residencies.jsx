import React from 'react'
import './Residencies.css'

import data from '../../utils/slider.json'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
const Residencies = () => {
  return (
    <section className='r-wrapper'>

        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residences</span>

            </div>

            <Swiper >
                {
                    data.map((card, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='r-card'>
                                    <img src={card.image} alt='home' />
                                        
                                        <span className='secondaryText r-price'>
                                            <span>$</span><span>{card.price}</span>
                                        </span>
                                    
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper> 
        </div>
    </section>
  )
}

export default Residencies
