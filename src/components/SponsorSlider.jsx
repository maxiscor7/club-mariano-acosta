import React from 'react'
import spon1 from "../assets/spon1.png";
import spon2 from "../assets/spon2.png";
import Carousel from 'react-bootstrap/Carousel';

export default function SponsorSlider () {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img src={spon1} alt='First slide' className='s-block w-100 img-fluid' style={{ height: '300px', objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={spon2} alt='Second slide' className='s-block w-100 img-fluid' style={{ height: '300px', objectFit: 'cover' }} />
      </Carousel.Item>
    </Carousel>
  )
}
