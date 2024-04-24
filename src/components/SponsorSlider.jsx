import React from 'react'
import spon1 from "../assets/spon1.png";
import spon2 from "../assets/spon2.png";
import spon3 from "../assets/spon3.png";
import spon4 from "../assets/spon4.png";
import Carousel from 'react-bootstrap/Carousel';

export default function SponsorSlider () {
  return (
    <Carousel controls={false} indicators={false} className="d-block w-100">
      <Carousel.Item>
        <img src={spon2} alt='First slide' className='s-block w-100 img-fluid' style={{ minHeight:'100px', objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={spon1} alt='Second slide' className='s-block w-100 img-fluid' style={{minHeight:'100px',  objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={spon3} alt='Third slide' className='s-block w-100 img-fluid' style={{minHeight:'100px',  objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={spon4} alt='Fourth slide' className='s-block w-100 img-fluid' style={{minHeight:'100px',  objectFit: 'cover' }} />
      </Carousel.Item>
    </Carousel>
  )
}
